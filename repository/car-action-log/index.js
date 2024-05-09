const { randomUUID } = require('crypto');

const { CarActionLog, Car, User } = require('../../models');
const NotFoundError = require('../../exceptions/NotFoundError');

const redisHelper = require('../../helper/redis');

const getCarActionLogByCarId = async (carId, userId) => {
  try {
    const result = await redisHelper.getData(`car-action-log:${carId}`);
    return result;
  } catch (error) {
    const car = await Car.findByPk(carId);

    if (!car) {
      throw new NotFoundError('Car not found.');
    }

    const user = await User.findByPk(userId);

    if (!user) {
      throw new NotFoundError('User not found.');
    }

    const result = await CarActionLog.findAll({
      where: {
        car_id: carId,
      },
      include: [
        {
          model: Car,
        },
        {
          model: User,
        },
      ],
    });

    await redisHelper.setData(`car-action-log:${carId}`, result);
    return result;
  }
};

const postCarActionLogByCarId = async (carId, userId, action) => {
  const id = `car-action-log:${randomUUID()}`;

  const car = await Car.findByPk(carId, { paranoid: false });

  if (!car) {
    throw new NotFoundError('Car not found.');
  }

  const user = await User.findByPk(userId, { paranoid: false });

  if (!user) {
    throw new NotFoundError('User not found.');
  }

  const result = await CarActionLog.create({
    id,
    car_id: carId,
    user_id: userId,
    action,
  });

  await redisHelper.setData(`car-action-log:${carId}`, result);
  return result;
};

module.exports = {
  getCarActionLogByCarId,
  postCarActionLogByCarId,
};
