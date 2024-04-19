const express = require('express');

const { validationHandler, authorizeAdminMw } = require('../middleware');
const { CarTypePayloadSchema } = require('../validations');

const router = express.Router();

const carTypeController = require('../controllers/car-type');

router
  .route('/')
  .get(authorizeAdminMw, carTypeController.getCarTypesHandler)
  .post(
    [validationHandler(CarTypePayloadSchema), authorizeAdminMw],
    carTypeController.postCarTypeHandler,
  );

router
  .route('/:id')
  .get(authorizeAdminMw, carTypeController.getCarTypeByIdHandler)
  .put(
    [validationHandler(CarTypePayloadSchema), authorizeAdminMw],
    carTypeController.putCarTypeByIdHandler,
  )
  .delete(authorizeAdminMw, carTypeController.deleteCarTypeByIdHandler);

module.exports = router;
