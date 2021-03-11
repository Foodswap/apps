require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.use(express.json());

const router = require('./app/router');

app.use('/v1', router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});