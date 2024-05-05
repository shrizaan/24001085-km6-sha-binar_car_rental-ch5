const { CarPayloadSchema } = require('./CarSchema');
const { CarBrandPayloadSchema } = require('./CarBrandSchema');
const { CarTypePayloadSchema } = require('./CarTypeSchema');
const { UserLoginPayloadSchema, UserRegisterPayloadSchema } = require('./UserSchema');

module.exports = {
  CarBrandPayloadSchema,
  CarTypePayloadSchema,
  CarPayloadSchema,
  UserLoginPayloadSchema,
  UserRegisterPayloadSchema,
};
