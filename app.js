const config = require('./config');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/1', (req, res) => {
  res.sendFile('./static/canvasCircles1.html', { root: __dirname });
});

app.get('/2', (req, res) => {
  res.sendFile('./static/canvasCircles2.html', { root: __dirname });
});

app.listen(config.PORT, console.log(`Listening on ${config.PORT}`));
