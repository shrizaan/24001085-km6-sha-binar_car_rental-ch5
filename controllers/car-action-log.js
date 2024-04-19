const carActionLogUseCase = require('../usecases/car-action-log/car-action-log');

const getCarActionLogByCarId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;

    const result = await carActionLogUseCase.getCarActionLogByCarId(id, userId);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCarActionLogByCarId };
