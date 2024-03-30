const { randomUUID } = require('crypto');

const redisHelper = require('../../helper/redis');
const NotFoundError = require('../../exceptions/NotFoundError');

const { CarType, Car } = require('../../models');

const getCarTypes = async () => {
  const result = await CarType.findAll({
    include: {
      model: Car,
    },
  });
  return result;
};

const getCarTypeById = async (id) => {
  try {
    const result = await redisHelper.getData(`car-type:${id}`);
    return result;
  } catch (error) {
    const result = await CarType.findOne({
      where: {
        id,
      },
      include: {
        model: Car,
      },
    });

    if (!result) {
      throw new NotFoundError('Car Type not found.');
    }

    await redisHelper.setData(`car-type:${id}`, result);
    return result;
  }
};

const postCarType = async (payload) => {
  const id = `car-type-${randomUUID()}`;
  const result = await CarType.create({
    id,
    ...payload,
  });

  await redisHelper.setData(`car-type:${id}`, result);
  return result;
};

const putCarTypeById = async (id, payload) => {
  const result = await CarType.update(payload, { where: { id } });

  // result adalah array, jika pada indeks pertama adalah 0 berarti tidak ada data yang diupdate atau indeks tidak ditemukan
  if (result[0]) {
    const updatedData = await CarType.findOne({
      where: {
        id,
      },
    });

    await redisHelper.setData(`car-type:${id}`, updatedData);

    return updatedData;
  }

  throw new NotFoundError('Car Type not found');
};

const deleteCarTypeById = async (id) => {
  const result = await CarType.destroy({
    where: { id },
  });

  const car = await CarType.findOne({
    where: {
      id,
    },
    paranoid: false,
  });

  if (result !== 0) {
    await redisHelper.deleteData(`car-type:${id}`);
    return car;
  }

  throw new NotFoundError('Car Type not found');
};

module.exports = {
  getCarTypes,
  getCarTypeById,
  postCarType,
  putCarTypeById,
  deleteCarTypeById,
};
