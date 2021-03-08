require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');

app.use(cors());

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const router = require('./app/router');

app.use(express.json());

app.use('/v1', router);


app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});