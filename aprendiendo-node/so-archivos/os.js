const os = require('os');

let GB = 1024*1024*1024;

console.log('CPU info : ', os.cpus());
console.log('IP address : ', os.networkInterfaces().eth0.map(i => i.address));
console.log('Free Memory (GB) : ', os.freemem()/GB);
console.log('OS Type : ', os.type());
console.log('OS versión : ', os.release());

console.log('OS Username : ', os.userInfo().username);
console.log('OS Home Directory : ', os.userInfo().homedir);
