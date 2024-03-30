const express = require('express');

const { validationHandler } = require('../middleware');
const { CarTypePayloadSchema } = require('../validations');

const router = express.Router();

const carTypeController = require('../controllers/car-type');

router
  .route('/')
  .get(carTypeController.getCarTypesHandler)
  .post(
    validationHandler(CarTypePayloadSchema),
    carTypeController.postCarTypeHandler,
  );

router
  .route('/:id')
  .get(carTypeController.getCarTypeByIdHandler)
  .put(
    validationHandler(CarTypePayloadSchema),
    carTypeController.putCarTypeByIdHandler,
  )
  .delete(carTypeController.deleteCarTypeByIdHandler);

module.exports = router;
