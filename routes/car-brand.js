const express = require('express');

const { validationHandler } = require('../middleware');
const { CarBrandPayloadSchema } = require('../validations');

const router = express.Router();

const carBrandController = require('../controllers/car-brand');

router
  .route('/')
  .get(carBrandController.getCarBrandsHandler)
  .post(
    validationHandler(CarBrandPayloadSchema),
    carBrandController.postCarBrandHandler,
  );

router
  .route('/:id')
  .get(carBrandController.getCarBrandByIdHandler)
  .put(
    validationHandler(CarBrandPayloadSchema),
    carBrandController.putCarBrandByIdHandler,
  )
  .delete(carBrandController.deleteCarBrandByIdHandler);

module.exports = router;
