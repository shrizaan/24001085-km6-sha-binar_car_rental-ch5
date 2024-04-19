const express = require('express');

const userController = require('../controllers/user');
const { validationHandler } = require('../middleware');
const { UserPayloadSchema } = require('../validations');

const router = express.Router();

router.post(
  '/register',
  validationHandler(UserPayloadSchema),
  userController.register,
);

router.post(
  '/login',
  validationHandler(UserPayloadSchema),
  userController.login,
);

module.exports = router;
