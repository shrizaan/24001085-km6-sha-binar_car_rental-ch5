const express = require('express');

const { validationHandler } = require('../middleware');
const { CarPayloadSchema } = require('../validations');

const router = express.Router();

const carController = require('../controllers/car');

router
  .route('/')
  .get(carController.getCarsHandler)
  .post(validationHandler(CarPayloadSchema), carController.postCarHandler);

router
  .route('/:id')
  .get(carController.getCarByIdHandler)
  .put(validationHandler(CarPayloadSchema), carController.putCarByIdHandler)
  .delete(carController.deleteCarByIdHandler);

module.exports = router;
