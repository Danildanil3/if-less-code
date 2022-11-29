const { roundOf } = require('./game');

const p1 = process.argv[2];
const p2 = process.argv[3];

console.log(roundOf(p1, p2));
