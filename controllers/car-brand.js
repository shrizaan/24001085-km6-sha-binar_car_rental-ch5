const carBrandUseCase = require('../usecases/car-brand/car-brand');

const getCarBrandsHandler = async (req, res, next) => {
  try {
    const data = await carBrandUseCase.getCarBrands();
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getCarBrandByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await carBrandUseCase.getCarBrandById(id);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const postCarBrandHandler = async (req, res, next) => {
  try {
    const result = await carBrandUseCase.postCarBrand(req.body);

    res.status(201).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const putCarBrandByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await carBrandUseCase.putCarBrandById(id, req.body);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCarBrandByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await carBrandUseCase.deleteCarBrandById(id);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCarBrandsHandler,
  getCarBrandByIdHandler,
  postCarBrandHandler,
  putCarBrandByIdHandler,
  deleteCarBrandByIdHandler,
};
