const Joi = require('joi');

const CarBrandPayloadSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { CarBrandPayloadSchema };
