require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const cors = require('cors');

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

const corsOption = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  exposedHeaders: 'Authorization',
};

app.use(cors(corsOption));

const port = process.env.PORT || 3000;

app.use(express.json());

const router = require('./router');

app.use('/v1', router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
