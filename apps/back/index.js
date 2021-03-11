require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

const corsOption = {
   "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "exposedHeaders": "Authorization"
}

app.use(cors(corsOption));

const port = process.env.PORT || 3000;

app.use(express.json());

const router = require('./app/router');

app.use('/v1', router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});