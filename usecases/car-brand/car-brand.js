const carBrandRepo = require('../../repository/car-brand');

const getCarBrands = async () => {
  const data = await carBrandRepo.getCarBrands();
  return data;
};

const getCarBrandById = async (id) => {
  const data = await carBrandRepo.getCarBrandById(id);
  return data;
};

const postCarBrand = async (payload) => {
  const data = await carBrandRepo.postCarBrand(payload);
  return data;
};

const putCarBrandById = async (id, payload) => {
  const data = await carBrandRepo.putCarBrandById(id, payload);
  return data;
};

const deleteCarBrandById = async (id) => {
  const data = await carBrandRepo.deleteCarBrandById(id);
  return data;
};

module.exports = {
  getCarBrands,
  getCarBrandById,
  postCarBrand,
  putCarBrandById,
  deleteCarBrandById,
};
