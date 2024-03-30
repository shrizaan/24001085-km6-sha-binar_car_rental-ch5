const carTypeUseCase = require('../usecases/car-type/car-type');

const getCarTypesHandler = async (req, res, next) => {
  try {
    const data = await carTypeUseCase.getCarTypes();
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getCarTypeByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await carTypeUseCase.getCarTypeById(id);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const postCarTypeHandler = async (req, res, next) => {
  try {
    const result = await carTypeUseCase.postCarType(req.body);

    res.status(201).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const putCarTypeByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await carTypeUseCase.putCarTypeById(id, req.body);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCarTypeByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await carTypeUseCase.deleteCarTypeById(id);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCarTypesHandler,
  getCarTypeByIdHandler,
  postCarTypeHandler,
  putCarTypeByIdHandler,
  deleteCarTypeByIdHandler,
};
