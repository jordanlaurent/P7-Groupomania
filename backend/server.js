var express = require('express');
var bodyParser = require('body-parser')
var apiRouteur = require('./apiRouteur').router;

var server = express();

server.use(bodyParser.urlencoded ({ extended: true}));
server.use(bodyParser.json());
server.get('/', function (req, res){
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1> Bonjour sur mon super serveur </h1>')
});

server.use('/api/', apiRouteur);

server.listen(8080, function() {
    console.log('serveur en écoute ; )');
});