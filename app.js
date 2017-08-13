const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(__dirname));
// app.use('/files', express.static(path.join(__dirname, 'public')));
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/hello'));
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/goodbye'));
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
