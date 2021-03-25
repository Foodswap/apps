// Dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Router
const router = require('./router');

// Init app
const app = express();

// CONFIGS
const corsOption = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  exposedHeaders: 'Authorization',
};
const port = process.env.PORT || 3000;

// Globals middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors(corsOption));
app.use(express.json());

// Start server
app.use('/v1', router);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`http://localhost:${port}`);
});
