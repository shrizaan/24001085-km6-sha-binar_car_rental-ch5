const carRepo = require('../../repository/car');

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
  return data;
};

const putCarById = async (id, payload) => {
  const data = await carRepo.putCarById(id, payload);
  return data;
};

const deleteCarById = async (id) => {
  const data = await carRepo.deleteCarById(id);
  return data;
};

module.exports = {
  getCars,
  getCarById,
  postCar,
  putCarById,
  deleteCarById,
};
