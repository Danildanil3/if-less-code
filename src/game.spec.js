// const { describe, it, expect } = require('./minispec')
const { roundOf, stone, scissors, paper } = require('./game');

describe('game without arguments', () => {});

describe('game of 1 players', () => {});

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
