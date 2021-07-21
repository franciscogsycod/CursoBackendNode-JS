const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, resp) => {
    fs.readFile('./big', (err,data) => {
        if(err){
            console.error('error',err);
        }
        resp.end(data);
    });
});

server.listen(8000);