const http = require('http');
const server = http.createServer();

server.on('request', (req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/plain');

    resp.end('hello world\n');
});

server.listen(8000);
console.log('Servidor en la URL http://localhost:8000');
