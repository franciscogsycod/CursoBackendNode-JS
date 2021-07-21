// %s -> string
// &d -> number
// %j -> JSON

console.log('Un %s y un %s', 'perrito', 'gatito');

console.log('Un %d y un %d', 2.05, 3.05);

console.log('Un %j y un %j', {
    "uno1": 'prop1-uno', 
    "uno2": 'prop2-uno',
}, {
    "dos1": 'prop1-dos',
    "dos2": 'prop2-dos'
})

console.info('Info : soy un alias de log');
console.warn('Warn : soy un alias de error');

console.assert(42 === '42');

//console.trace("hello");

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo');