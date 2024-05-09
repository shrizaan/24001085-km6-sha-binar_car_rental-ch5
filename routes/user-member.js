const express = require('express');

const userController = require('../controllers/user');
const { validationHandler, setRoleMemberWhenRegister } = require('../middleware');
const { UserRegisterPayloadSchema, UserLoginPayloadSchema } = require('../validations');

const router = express.Router();

router.post(
  '/register',
  [validationHandler(UserRegisterPayloadSchema), setRoleMemberWhenRegister],
  userController.register,
);

router.post(
  '/login',
  validationHandler(UserLoginPayloadSchema),
  userController.login,
);

module.exports = router;
