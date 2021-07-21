const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('Hello Pluto');
}, 'pluto is deprecated, is not a planet anymore');

helloPluto();