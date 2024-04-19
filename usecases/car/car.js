const carRepo = require('../../repository/car');
const carActionLogRepo = require('../../repository/car-action-log');

const getCars = async () => {
  const data = await carRepo.getCars();
  return data;
};

const getCarById = async (id) => {
  const data = await carRepo.getCarById(id);
  return data;
};

const postCar = async (payload) => {
  const data = await carRepo.postCar(payload);
  await carActionLogRepo.postCarActionLogByCarId(data.id, payload.userId, 'add');
  return data;
};

const putCarById = async (id, payload) => {
  const data = await carRepo.putCarById(id, payload);
  await carActionLogRepo.postCarActionLogByCarId(
    data.id,
    payload.userId,
    'edit',
  );
  return data;
};

const deleteCarById = async (id, userId) => {
  const data = await carRepo.deleteCarById(id);
  await carActionLogRepo.postCarActionLogByCarId(
    data.id,
    userId,
    'delete',
  );
  return data;
};

module.exports = {
  getCars,
  getCarById,
  postCar,
  putCarById,
  deleteCarById,
};
