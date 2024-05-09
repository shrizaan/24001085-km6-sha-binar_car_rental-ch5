const { randomUUID } = require('crypto');

const path = require('path');
const { Car, CarType, CarBrand, CarActionLog } = require('../../models');
const NotFoundError = require('../../exceptions/NotFoundError');

const redisHelper = require('../../helper/redis');
const { uploader } = require('../../helper/cloudinary');

const getCars = async () => {
  const result = await Car.findAll({
    include: [
      {
        model: CarType,
      },
      {
        model: CarBrand,
      },
    ],
  });
  return result;
};

const getCarById = async (id) => {
  try {
    const result = await redisHelper.getData(`car:${id}`);
    return result;
  } catch (error) {
    const result = await Car.findOne({
      where: {
        id,
      },
      include: [
        {
          model: CarType,
        },
        {
          model: CarBrand,
        },
        // NOTE: may trhow bug
        {
          model: CarActionLog,
        },
      ],
    });

    if (!result) {
      throw new NotFoundError('Car not found.');
    }

    await redisHelper.setData(`car:${id}`, result);
    return result;
  }
};

const postCar = async (payload) => {
  const id = `car-${randomUUID()}`;

  if (payload.image) {
    const { image } = payload;

    image.publicId = id;

    image.name = `${image.publicId}${path.parse(image.name).ext}`;

    const imageUpload = await uploader(image);
    // eslint-disable-next-line no-param-reassign
    payload.image = imageUpload.secure_url;
  }

  const result = await Car.create(
    {
      id,
      ...payload,
    },
    {
      include: [
        {
          model: CarType,
        },
        {
          model: CarBrand,
        },
      ],
    },
  );

  await redisHelper.setData(`car:${id}`, result);

  return result;
};

const putCarById = async (id, payload) => {
  if (payload.image) {
    const { image } = payload;

    image.publicId = id;

    image.name = `${image.publicId}${path.parse(image.name).ext}`;

    const imageUpload = await uploader(image);
    // eslint-disable-next-line no-param-reassign
    payload.image = imageUpload.secure_url;
  }

  const result = await Car.update(payload, { where: { id } });

  // result adalah array, jika pada indeks pertama adalah 0 berarti tidak ada data yang diupdate atau indeks tidak ditemukan
  if (result[0]) {
    const updatedData = await Car.findOne({
      where: {
        id,
      },
      include: [
        {
          model: CarType,
        },
        {
          model: CarBrand,
        },
      ],
    });

    await redisHelper.setData(`car:${id}`, updatedData);

    return updatedData;
  }

  throw new NotFoundError('Car not found');
};

const deleteCarById = async (id) => {
  const result = await Car.destroy({
    where: { id },
  });

  const car = await Car.findOne({
    where: {
      id,
    },
    paranoid: false,
  });

  if (result !== 0) {
    await redisHelper.deleteData(`car:${id}`);
    return car;
  }

  throw new NotFoundError('Car not found');
};

module.exports = {
  getCars,
  getCarById,
  postCar,
  putCarById,
  deleteCarById,
};
