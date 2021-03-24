const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

const path = `${__dirname}/dist`;
const port = 80;

app.use(express.static(path));
app.get('*', (req, res) => {
  res.sendFile(`${path}/index.html`);
});

app.listen(port);
