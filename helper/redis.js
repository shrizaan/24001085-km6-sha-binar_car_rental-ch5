const redisClient = require('../config/redis');

const getData = async (key) => {
  const data = await redisClient.get(key);
  if (data === null) throw new Error('Cache not found.');
  return JSON.parse(data);
};

const setData = async (key, value, expiration = 420) => {
  const payload = JSON.stringify(value);
  await redisClient.set(key, payload, {
    EX: expiration,
  });
};

const deleteData = async (key) => {
  await redisClient.del(key);
};

module.exports = { getData, setData, deleteData };
