const express = require('express');

const { validationHandler, authorizeAdminMw } = require('../middleware');
const { CarPayloadSchema } = require('../validations');
const carController = require('../controllers/car');
const carActionLogController = require('../controllers/car-action-log');

const router = express.Router();

router
  .route('/')
  .get(authorizeAdminMw, carController.getCarsHandler)
  .post(
    [validationHandler(CarPayloadSchema), authorizeAdminMw],
    carController.postCarHandler,
  );

router
  .route('/:id')
  .get(authorizeAdminMw, carController.getCarByIdHandler)
  .put(
    [validationHandler(CarPayloadSchema), authorizeAdminMw],
    carController.putCarByIdHandler,
  )
  .delete(authorizeAdminMw, carController.deleteCarByIdHandler);

router
  .route('/:id/activities')
  .get(authorizeAdminMw, carActionLogController.getCarActionLogByCarId);

module.exports = router;
