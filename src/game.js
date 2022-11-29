const stone = 'stone';
const scissors = 'scissors';
const paper = 'paper';

function roundOf(p1, p2) {
    if (p1 === p2) {
        return 'draw';
    } else {
        switch (`${p1}--${p2}`) {
            case 'stone--scissors':
                return '1';
            case 'scissors--paper':
                return '1';
            case 'paper--stone':
                return '1';
            case 'stone--paper':
                return '2';
            case 'scissors--stone':
                return '2';
            case 'paper--scissors':
                return '2';
        }
    }
}

module.exports = {
    roundOf,
    stone,
    scissors,
    paper,
};
