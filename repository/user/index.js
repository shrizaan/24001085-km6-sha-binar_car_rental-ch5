const { randomUUID } = require('crypto');
const bcrypt = require('bcrypt');

const { User } = require('../../models');

const redisHelper = require('../../helper/redis');
const NotFoundError = require('../../exceptions/NotFoundError');

const BCRYPT_SALT = 10;

const getUserByEmail = async (email) => {
  try {
    const result = await redisHelper.getData(`user:${email}`);
    return result;
  } catch (error) {
    const result = await User.findOne({
      where: {
        email,
      },
    });

    if (!result) {
      throw new NotFoundError('User not found.');
    }

    await redisHelper.setData(`user:${email}`, result);
    return result;
  }
};

const postUser = async (payload) => {
  const id = `user-${randomUUID()}`;

  const encryptedPassword = await bcrypt.hash(payload.password, BCRYPT_SALT);

  const result = await User.create({
    id,
    ...payload,
    password: encryptedPassword,
  });

  await redisHelper.setData(`user:${payload.email}`, result);

  return result;
};

const putUserByEmail = async (email, payload) => {
  const result = await User.update(payload, {
    where: {
      email,
    },
  });

  if (result[0]) {
    const updatedData = await User.findOne({
      where: {
        email,
      },
    });

    await redisHelper.setData(`user:${email}`, updatedData);

    return updatedData;
  }

  throw new NotFoundError('User not found.');
};

const deleteUserByEmail = async (email) => {
  const result = await User.destroy({
    where: {
      email,
    },
  });

  const user = await User.findOne({
    where: {
      email,
    },
    paranoid: false,
  });

  if (result !== 0) {
    await redisHelper.deleteData(`user:${email}`);
    return user;
  }

  throw new NotFoundError('User not found.');
};

module.exports = {
  getUserByEmail,
  postUser,
  putUserByEmail,
  deleteUserByEmail,
};
