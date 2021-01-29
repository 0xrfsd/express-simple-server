const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const server = express();

const port = 3000;

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(process.env.PORT || port, function () {
  console.log('Listning on');
})

module.exports = server