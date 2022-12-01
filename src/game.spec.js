// const { describe, it, expect } = require('./minispec')
const { roundOf, stone, scissors, paper } = require('./game');

xdescribe('game with wrong gestures', () => {
    it('throw an error for first player', () => {
        expect(() => {
            roundOf('bad', stone);
        }).toThrow(new Error(`Player 1 used not supported gesture 'bad'`));
    });
    it('throw an error for second player', () => {
        expect(() => {
            roundOf(stone, 'wrong');
        }).toThrow(new Error(`Player 2 used not supported gesture 'wrong'`));
    });
    it('throw an error for third player', () => {
        expect(() => {
            roundOf(stone, paper, 'rock');
        }).toThrow(new Error(`Player 3 used not supported gesture 'rock'`));
    });
});

describe('game for 2 players', () => {
    it('resolves with draw for same gestures', () => {
        expect(roundOf(stone, stone)).toBe('draw');
        expect(roundOf(scissors, scissors)).toBe('draw');
        expect(roundOf(paper, paper)).toBe('draw');
    });

    it('may resolve with win of first player', () => {
        expect(roundOf(stone, scissors)).toBe('1');
        expect(roundOf(scissors, paper)).toBe('1');
        expect(roundOf(paper, stone)).toBe('1');
    });

    it('may resolve with win of second player', () => {
        expect(roundOf(stone, paper)).toBe('2');
        expect(roundOf(scissors, stone)).toBe('2');
        expect(roundOf(paper, scissors)).toBe('2');
    });
});

xdescribe('game for 2 players - extended', () => {
    it('resolves with draw for same gestures', () => {
        expect(roundOf(lizard, lizard)).toBe('draw');
        expect(roundOf(spock, spock)).toBe('draw');
    });

    it('may resolve with win of first player', () => {
        expect(roundOf(stone, lizard)).toBe('1');
        expect(roundOf(scissors, lizard)).toBe('1');
        expect(roundOf(paper, spock)).toBe('1');
        expect(roundOf(spock, stone)).toBe('1');
        expect(roundOf(spock, scissors)).toBe('1');
        expect(roundOf(lizard, spock)).toBe('1');
        expect(roundOf(lizard, paper)).toBe('1');
    });

    it('may resolve with win of second player', () => {
        expect(roundOf(lizard, stone)).toBe('2');
        expect(roundOf(lizard, scissors)).toBe('2');
        expect(roundOf(spock, paper)).toBe('2');
        expect(roundOf(stone, spock)).toBe('2');
        expect(roundOf(scissors, spock)).toBe('2');
        expect(roundOf(spock, lizard)).toBe('2');
        expect(roundOf(paper, lizard)).toBe('2');
    });
});

xdescribe('game for 3+ players', () => {
    describe('resolves with draw', () => {
        it('when all gestures are the same', () => {
            expect(roundOf(stone, stone, stone)).toBe('draw');
        });
        it('when all payers have at least one lose', () => {
            expect(roundOf(stone, scissors, paper)).toBe('draw');
        });
    });
    describe('resolves with win of one player', () => {
        it('when it bits all other equivalent gestures', () => {
            expect(roundOf(paper, stone, stone)).toBe('1');
            expect(roundOf(stone, paper, stone)).toBe('2');
            expect(roundOf(stone, stone, paper)).toBe('3');
        });
        it('when it bits other different gestures', () => {
            expect(roundOf(paper, spock, lizard)).toBe('3');
            expect(roundOf(scissors, stone, lizard)).toBe('2');
        });
    });
    describe('resolves with win of two players', () => {
        it('when they did same gesture', () => {
            expect(roundOf(paper, stone, paper)).toBe('1 3');
        });
        it('when 2 players bit 3 other', () => {
            expect(roundOf(stone, paper, stone, paper, stone)).toBe('2 4');
        });
    });
});
