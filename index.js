require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

const routes = require('./routes');
const { errorHandler } = require('./middleware');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
  }),
);

app.use('/', express.static('public'));

// CORS Configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// Routes
app.use('/', routes);

// Not Found Routes
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Route ${req.baseUrl} not found.`,
  });
});

// Middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
