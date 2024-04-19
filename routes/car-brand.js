const express = require('express');

const { validationHandler, authorizeAdminMw } = require('../middleware');
const { CarBrandPayloadSchema } = require('../validations');

const router = express.Router();

const carBrandController = require('../controllers/car-brand');

router
  .route('/')
  .get(authorizeAdminMw, carBrandController.getCarBrandsHandler)
  .post(
    [validationHandler(CarBrandPayloadSchema), authorizeAdminMw],
    carBrandController.postCarBrandHandler,
  );

router
  .route('/:id')
  .get(authorizeAdminMw, carBrandController.getCarBrandByIdHandler)
  .put(
    [validationHandler(CarBrandPayloadSchema), authorizeAdminMw],
    carBrandController.putCarBrandByIdHandler,
  )
  .delete(authorizeAdminMw, carBrandController.deleteCarBrandByIdHandler);

module.exports = router;
