// Dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const expressJSDocSwagger = require('express-jsdoc-swagger');

/**
 * An error message
 *
 * @typedef {object} ErrorDto
 *
 * @property {number} error - The http status number error
 * @property {string} message - The information about the error
 */

const options = {
  info: {
    version: '0.0.1',
    title: 'FoodSwap Api',
    description: 'The api of FoodSwap',
  },
  filesPattern: './**/*.js',
  baseDir: __dirname,
  exposeSwaggerUI: true,
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
    {
      url: 'http://int.foodswap.fr:3000',
      description: 'Staging server',
    },
  ],
  exposeApiDocs: true,
  apiDocsPath: '/api-docs.json',
};

// Router
const router = require('./router');

// Init app
const app = express();

// wrap swagger
expressJSDocSwagger(app)(options);

// CONFIGS
const corsOption = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  exposedHeaders: 'Authorization',
};
const port = process.env.NODE_ENV === 'test'
  ? 5555
  : process.env.PORT || 3000;

// Globals middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors(corsOption));
app.use(express.json());

// Start server
app.use('/v1', router);
const server = app.listen(port, () => {
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.log(`http://localhost:${port}`);
  }
});

module.exports = server;
