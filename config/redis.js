const { createClient } = require('redis');

const connection = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

connection.on('error', (error) => {
  console.error(error);
});

connection.connect();

module.exports = connection;
