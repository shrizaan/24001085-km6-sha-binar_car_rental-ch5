const { ValidationError } = require('sequelize');
const jwt = require('jsonwebtoken');

const userUseCase = require('../usecases/user/user');
const ClientError = require('../exceptions/ClientError');
const InvariantError = require('../exceptions/InvariantError');
const AuthorizationError = require('../exceptions/AuthorizationError');

const validationHandler = (schema) => (req, res, next) => {
  // Letakkan image ke request body untuk divalidasi
  if (req?.files?.image) {
    const { image } = req.files;
    req.body.image = image;
  }

  const validationResult = schema.validate(req.body);

  if (validationResult.error) {
    throw new InvariantError(validationResult.error.message);
  }

  next();
};

// eslint-disable-next-line consistent-return
function errorHandler(err, req, res, next) {
  console.error(err);

  if (err instanceof Error) {
    if (err instanceof ClientError || err instanceof ValidationError) {
      const response = {
        error: {
          message: err.message,
          code: err?.statusCode || 400,
          type: err.name,
        },
      };
      return res.status(err?.statusCode || 400).json(response);
    }

    return res.status(500).json({
      error: {
        message: 'There was a failure on our server',
        code: 500,
        type: 'ServerError',
      },
    });
  }
  next();
}

const setRoleAdminWhenRegister = async (req, res, next) => {
  req.body.role = 'admin';
  next();
};

const setRoleMemberWhenRegister = async (req, res, next) => {
  req.body.role = 'member';
  next();
};

const authorizeSuperAdminMw = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split('Bearer ')[1];
    const tokenPayload = jwt.verify(token, process.env.JWT_SIGNATURE_SECRET);

    if (tokenPayload.role !== 'superadmin') {
      throw new Error();
    }

    req.user = await userUseCase.getUserByEmail(tokenPayload.email);
    next();
  } catch (error) {
    try {
      throw new AuthorizationError(
        'You are not an Super Admin and cannot access this resource.',
      );
    } catch (err) {
      next(err);
    }
  }
};

const authorizeAdminMw = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split('Bearer ')[1];
    const tokenPayload = jwt.verify(token, process.env.JWT_SIGNATURE_SECRET);

    req.user = await userUseCase.getUserByEmail(tokenPayload.email);
    next();
  } catch (error) {
    try {
      throw new AuthorizationError(
        'You are not an Super Admin or Admin and cannot  access this resource.',
      );
    } catch (err) {
      next(err);
    }
  }
};

const authorizeMemberMw = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split('Bearer ')[1];
    const tokenPayload = jwt.verify(token, process.env.JWT_SIGNATURE_SECRET);

    req.user = await userUseCase.getUserByEmail(tokenPayload.email);
    next();
  } catch (error) {
    try {
      throw new AuthorizationError(
        'You are not an Super Admin, Admin, or Member and cannot access this resource.',
      );
    } catch (err) {
      next(err);
    }
  }
};

module.exports = {
  errorHandler,
  validationHandler,
  authorizeAdminMw,
  authorizeSuperAdminMw,
  authorizeMemberMw,
  setRoleAdminWhenRegister,
  setRoleMemberWhenRegister
};
