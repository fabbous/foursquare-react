var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var IP = 'localhost';
var PORT = 3000;

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '../public')));


app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, function () {
  console.log('listening right now on port', PORT);
});


module.exports.app = app;



