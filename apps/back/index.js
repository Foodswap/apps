require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

const router = require('./app/router');

app.use(express.json());

app.use('/v1', router);


app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});