const fs = require('fs');

const file = process.argv[2];
const content = fs.readFile(file, function(err, content) {
    if(err){
        return console.error('error', err);
    } else {
        const lines = content.toString().split('\n').length;
        console.log(lines);
    }
});

