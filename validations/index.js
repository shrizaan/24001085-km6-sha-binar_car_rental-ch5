const { CarPayloadSchema } = require('./CarSchema');
const { CarBrandPayloadSchema } = require('./CarBrandSchema');
const { CarTypePayloadSchema } = require('./CarTypeSchema');
const { UserPayloadSchema } = require('./UserSchema');

module.exports = {
  CarBrandPayloadSchema,
  CarTypePayloadSchema,
  CarPayloadSchema,
  UserPayloadSchema,
};
