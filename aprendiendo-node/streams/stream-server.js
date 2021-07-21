const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, resp) => {
    const src = fs.createReadStream('./big', );
    src.pipe(resp);
});

server.listen(8000);