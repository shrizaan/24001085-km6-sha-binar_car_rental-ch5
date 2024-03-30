const carTypeRepo = require('../../repository/car-type');

const getCarTypes = async () => {
  const data = await carTypeRepo.getCarTypes();
  return data;
};

const getCarTypeById = async (id) => {
  const data = await carTypeRepo.getCarTypeById(id);
  return data;
};

const postCarType = async (payload) => {
  const data = await carTypeRepo.postCarType(payload);
  return data;
};

const putCarTypeById = async (id, payload) => {
  const data = await carTypeRepo.putCarTypeById(id, payload);
  return data;
};

const deleteCarTypeById = async (id) => {
  const data = await carTypeRepo.deleteCarTypeById(id);
  return data;
};

module.exports = {
  getCarTypes,
  getCarTypeById,
  postCarType,
  putCarTypeById,
  deleteCarTypeById,
};
