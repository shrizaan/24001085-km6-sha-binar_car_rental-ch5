const carUseCase = require('../usecases/car/car');

const getCarsHandler = async (req, res, next) => {
  try {
    const data = await carUseCase.getCars();
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getCarByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await carUseCase.getCarById(id);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const postCarHandler = async (req, res, next) => {
  try {
    const { image } = req.files;
    req.body.image = image;
    const result = await carUseCase.postCar(req.body);

    res.status(201).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const putCarByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { image } = req.files;
    req.body.image = image;

    const result = await carUseCase.putCarById(id, req.body);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCarByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await carUseCase.deleteCarById(id);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCarsHandler,
  getCarByIdHandler,
  postCarHandler,
  putCarByIdHandler,
  deleteCarByIdHandler,
};
