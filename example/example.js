var off2json = require('../index.js');
var fs = require('fs');

var offcontents = fs.readFileSync(__dirname + '/cube.off', 'utf8');
console.log(offcontents);
var json = off2json(offcontents);

console.log(json);

