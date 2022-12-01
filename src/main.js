const { roundOf } = require('./game');

const p1 = process.argv[2];
const p2 = process.argv[3];

const result = roundOf(p1, p2);
if (result === 'draw') {
    console.log('Draw');
} else {
    console.log(`Winner is Player ${result}`);
}
