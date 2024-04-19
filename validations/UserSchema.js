const Joi = require('joi');

const UserPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().valid('superadmin', 'admin', 'member').required(),
});

module.exports = { UserPayloadSchema };
  