var http = require('http');

http.createServer(function wow (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World!');
}).listen(8080);