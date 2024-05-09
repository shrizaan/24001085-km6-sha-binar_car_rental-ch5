const express = require('express');

const userController = require('../controllers/user');
const {
  validationHandler,
  authorizeSuperAdminMw,
  setRoleAdminWhenRegister,
} = require('../middleware');
const {
  UserRegisterPayloadSchema,
  UserLoginPayloadSchema,
} = require('../validations');

const router = express.Router();

router.post(
  '/register',
  [
    validationHandler(UserRegisterPayloadSchema),
    authorizeSuperAdminMw,
    setRoleAdminWhenRegister,
  ],
  userController.register,
);
router.post(
  '/login',
  validationHandler(UserLoginPayloadSchema),
  userController.login,
);

module.exports = router;
