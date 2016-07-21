var appport = process.env.PORT;
if(!appport) appport = 8284;

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.JS!');
}).listen(appport);
console.log('Server running in port '+appport);
