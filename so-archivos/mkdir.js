const fs = require('fs');

fs.mkdir('./test-mkdir', { 
    recursive: true,
    },
    (err) => {
        if(err) {
            return console.error('error',err);
        }
    }
);