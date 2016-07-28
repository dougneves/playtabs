var express = require('express');
var app = express();

var APP_PORT = process.env.PORT ? process.env.PORT : 8284;
console.log("Iniciando playtabs, tentando rodar na porta: " + APP_PORT)

//Express settings -----
app.set('views','./views');
app.set('view engine', 'jade');
//-----

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(APP_PORT, function () {
  console.log("Servidor iniciado na porta " + APP_PORT);
});
