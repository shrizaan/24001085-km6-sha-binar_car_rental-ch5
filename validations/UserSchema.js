const Joi = require('joi');

const UserRegisterPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  image: Joi.object({
    mimetype: Joi.string()
      .valid(
        'image/apng',
        'image/avif',
        'image/gif',
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
      )
      .required(),
  })
    .unknown()
    .required(),
  role: Joi.string().valid('superadmin', 'admin', 'member').required(),
});


const UserLoginPayloadSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

module.exports = { UserRegisterPayloadSchema, UserLoginPayloadSchema };
