const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userUseCase = require('../usecases/user/user');
const AuthenticationError = require('../exceptions/AuthenticationError');

const createJWTToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SIGNATURE_SECRET);

const register = async (req, res, next) => {
  try {
    const result = await userUseCase.postUser(req.body);
    res.status(201).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userUseCase.getUserByEmail(email);

    const isPassCorrect = await bcrypt.compare(password, user.password);

    if (!isPassCorrect) {
      throw new AuthenticationError(
        'The credentials you provided are incorrect.',
      );
    }

    const token = createJWTToken({
      id: user.id,
      email: user.email,
      image: user.image,
      role: user.role,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    });

    res.status(201).json({
      status: 'success',
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        token,
        created_at: user.created_at,
        updated_at: user.updated_at,
        deleted_at: user.deleted_at,
      },
    });
  } catch (error) {
    next(error);
  }
};

const currentUser = async (req, res, next) => {
  res.status(200).json(req.user);
};

module.exports = {
  register,
  login,
  currentUser,
};
