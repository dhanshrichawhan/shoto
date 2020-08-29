const express = require('express');
const app = express();
const routes = require('./routes');

const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
