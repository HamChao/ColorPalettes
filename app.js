global.abs_path = function(path) {
  return __dirname + path;
};
global.include = function(file) {
  return require(abs_path('/' + file));
};

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

server.listen(8080, function(){
    console.log('server run on http://localhost:8080');
});

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});