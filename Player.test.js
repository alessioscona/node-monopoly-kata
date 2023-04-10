const test = require('node:test');

const assert = require('assert/strict');

const Player = require('./Player.js')

// Player on beginning location (numbered 0), rolls 7, ends up on location 7

test('Player on beginning location (numbered 0), rolls 7, ends up on location 7', () => {
    let playerTest = new Player(0, "playerTest")
    return assert.equal(playerTest.move(7), 7);
});

// Player on location numbered 39, rolls 6, ends up on location 5

test('Player on location numbered 39, rolls 6, ends up on location 5', () => {
    let playerTest = new Player(39, "playerTest")
    return assert.equal(playerTest.move(6), 5);
});

