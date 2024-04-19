const express = require('express');

const userController = require('../controllers/user');
const {
  validationHandler,
  authorizeSuperAdminMw,
  authorizeAdminMw,
} = require('../middleware');
const { UserPayloadSchema } = require('../validations');

const router = express.Router();

router.post(
  '/register',
  [validationHandler(UserPayloadSchema), authorizeSuperAdminMw],
  userController.register,
);
router.post('/login', userController.login);

module.exports = router;
