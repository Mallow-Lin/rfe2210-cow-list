const express = require('express');
const path = require('path');
const db = require('../database/index.js')
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/fetch', (req, res) => {
  console.log('got here', req)
  res.send('Hello from the server!');
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
