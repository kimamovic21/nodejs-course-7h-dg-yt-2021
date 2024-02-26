console.log('Hello World');

const os = require('os');
const path = require('path');
// const math = require('./math');
const { add, subtract, multiply, divide } = require('./math');

console.log('OS Type: ', os.type());
console.log('OS Version:', os.version());
console.log('OS Homedir: ', os.homedir());

console.log('Directory name: ', __dirname);
console.log('File name:', __filename);

console.log('Path dirname: ',path.dirname(__filename));
console.log('Path basename: ', path.basename(__filename));
console.log('Path extname: ', path.extname(__filename));
console.log('Path parse: ', path.parse(__filename));

// console.log(math.add(2, 3));
console.log('Add:', add(2, 3));
console.log('Subtract:', subtract(2, 3));
console.log('Multiply: ', multiply(2, 3));
console.log('Divide: ', divide(2, 3));
