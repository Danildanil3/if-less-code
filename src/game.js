const scissors = 'scissors';
const lizard = 'lizard';
const stone = 'stone';
const spock = 'spock';
const paper = 'paper';

const matchSurrenders = {
    [scissors]: [paper, lizard],
    [lizard]:   [spock, paper],
    [stone]:    [lizard, scissors],
    [spock]:    [stone, scissors],
    [paper]:    [stone, spock],
};

function roundOf(...players) {
    validatePlayer(players);
    let winners = resolveWinners(players);

    if (winners.length === 0 || winners.length === players.length) {
        return 'draw';
    } else {
        return winners.join(' ');
    }
}

function validatePlayer(players) {
    players.forEach((gesture, index) => { if (!matchSurrenders[gesture]) throw `Player ${index + 1} used not supported gesture '${gesture}'` });
}

function resolveWinners(players) {
    const winners = new Set(players.keys()); // Get players indexes
    players = [ ...players.entries() ]; // Fix players indexes to gestures

    for (let contenderIndex = 0; contenderIndex < players.length; contenderIndex++) {
        players.forEach(([opponentIndex]) => { if (contenderBeatsOpponent(players, contenderIndex, opponentIndex)) winners.delete(opponentIndex) });
    }

    return Array.from(winners, i => i + 1);
}

function contenderBeatsOpponent(players, contenderIndex, opponentIndex) {
    let opponentGesture = players[opponentIndex][1];
    let contenderGesture = players[contenderIndex][1];

    return (opponentIndex !== contenderIndex) && (matchSurrenders[contenderGesture].includes(opponentGesture));
}

module.exports = {
    roundOf,
    scissors,
    lizard,
    spock,
    stone,
    paper,
};
