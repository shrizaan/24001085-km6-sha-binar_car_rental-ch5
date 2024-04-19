const carActionLogRepo = require('../../repository/car-action-log');

const getCarActionLogByCarId = async (carId, userId) => {
  const data = await carActionLogRepo.getCarActionLogByCarId(carId, userId);
  return data;
};

module.exports = { getCarActionLogByCarId };
