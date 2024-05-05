const express = require('express');

const userController = require('../controllers/user');
const { validationHandler, authorizeSuperAdminMw } = require('../middleware');
const { UserRegisterPayloadSchema } = require('../validations');

const router = express.Router();

router.post(
  '/register',
  [validationHandler(UserRegisterPayloadSchema), authorizeSuperAdminMw],
  userController.register,
);
router.post('/login', userController.login);

module.exports = router;
