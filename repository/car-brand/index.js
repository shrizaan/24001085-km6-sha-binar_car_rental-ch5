const { randomUUID } = require('crypto');

const redisHelper = require('../../helper/redis');
const { Car, CarBrand } = require('../../models');

const NotFoundError = require('../../exceptions/NotFoundError');

const getCarBrands = async () => {
  const result = await CarBrand.findAll({
    include: {
      model: Car,
    },
  });
  return result;
};

const getCarBrandById = async (id) => {
  try {
    const result = await redisHelper.getData(`car-brand:${id}`);
    return result;
  } catch (error) {
    const result = await CarBrand.findOne({
      where: {
        id,
      },
      include: {
        model: Car,
      },
    });

    if (!result) {
      throw new NotFoundError('Car brand not found.');
    }

    await redisHelper.setData(`car-brand:${id}`, result);

    return result;
  }
};

const postCarBrand = async (payload) => {
  const id = `car-brand-${randomUUID()}`;
  const result = await CarBrand.create({
    id,
    ...payload,
  });

  await redisHelper.setData(`car-brand:${id}`, result);
  return result;
};

const putCarBrandById = async (id, payload) => {
  const result = await CarBrand.update(payload, { where: { id } });

  // result adalah array, jika pada indeks pertama adalah 0 berarti tidak ada data yang diupdate atau indeks tidak ditemukan
  if (result[0]) {
    const updatedData = await CarBrand.findOne({
      where: {
        id,
      },
    });

    await redisHelper.setData(`car-brand:${id}`, updatedData);

    return updatedData;
  }

  throw new NotFoundError('Car brand not found');
};

const deleteCarBrandById = async (id) => {
  const result = await CarBrand.destroy({
    where: { id },
  });

  const car = await CarBrand.findOne({
    where: {
      id,
    },
    paranoid: false,
  });

  if (result !== 0) {
    await redisHelper.deleteData(`car-brand:${id}`);
    return car;
  }

  throw new NotFoundError('Car brand not found');
};

module.exports = {
  getCarBrands,
  getCarBrandById,
  postCarBrand,
  putCarBrandById,
  deleteCarBrandById,
};
