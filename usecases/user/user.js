const userRepo = require('../../repository/user');

const getUserByEmail = async (email) => {
  const data = await userRepo.getUserByEmail(email);
  return data;
};

const postUser = async (payload) => {
  const data = await userRepo.postUser(payload);
  return data;
};

const putUserByEmail = async (email, payload) => {
  const data = await userRepo.putUserByEmail(email, payload);
  return data;
};

const deleteUserByEmail = async (email) => {
  const data = await userRepo.deleteUserByEmail(email);
  return data;
};

module.exports = {
  getUserByEmail,
  postUser,
  putUserByEmail,
  deleteUserByEmail,
};
