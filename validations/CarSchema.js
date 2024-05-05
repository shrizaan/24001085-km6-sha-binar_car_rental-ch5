const Joi = require('joi');

const CarPayloadSchema = Joi.object({
  plate: Joi.string().required(),
  name: Joi.string().required(),
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
  }).unknown().required(),
  description: Joi.string().required(),
  rentPerDay: Joi.number().required(),
  capacity: Joi.number().required(),
  availableAt: Joi.string().required(),
  available: Joi.string().valid('true', 'false').required(),
  transmission: Joi.string().required(),
  year: Joi.number().required(),
  size: Joi.string().valid('small', 'medium', 'large').required(),
  type_id: Joi.string().required(),
  brand_id: Joi.string().required(),
});

module.exports = { CarPayloadSchema };
