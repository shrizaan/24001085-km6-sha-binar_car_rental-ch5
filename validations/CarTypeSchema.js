const Joi = require('joi');

const CarTypePayloadSchema = Joi.object({
  type: Joi.string().required(),
});

module.exports = { CarTypePayloadSchema };
