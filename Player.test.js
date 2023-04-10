const test = require('node:test');

const assert = require('assert/strict');

const Player = require('./Player.js')


test('Player on beginning location (numbered 0), rolls 7, ends up on location 7', () => {
    let playerTest = new Player(0, "playerTest")
    return assert.equal(playerTest.move(7), 7);
});

test('Player on location numbered 39, rolls 6, ends up on location 5', () => {
    let playerTest = new Player(39, "playerTest")
    return assert.equal(playerTest.move(6), 5);
});

test('During a turn a Player lands on Go and their balance increases by $200.', () => {
    let playerTest = new Player(38, "playerTest")
    playerTest.move(2)
    return assert.equal(playerTest.balance, 200);
})

test('During a turn a Player lands on some "normal" location and their balance does not change.', () => {
    let playerTest = new Player(0, "playerTest")
    playerTest.move(2)
    return assert.equal(playerTest.balance, 0);
})

test('Player starts before Go near the end of the Board, rolls enough to pass Go. The - - Player\'s balance increases by $200.', () => {
    let playerTest = new Player(38, "playerTest")
    playerTest.move(7)
    return assert.equal(playerTest.balance, 200);
})

test('Player starts on Go, takes a turn where the Player does not additionally land on or pass over Go. Their balance remains unchanged.', () => {
    let playerTest = new Player(0, "playerTest")
    playerTest.move(5)
    return assert.equal(playerTest.balance, 0);
})

test('Player passes go twice during a turn. Their balance increases by $200 each time for a total change of $400.', () => {
    let playerTest = new Player(39, "playerTest")
    playerTest.move(10)
    playerTest.move(36)
    return assert.equal(playerTest.balance, 400);
})

test('Player starts before Go To Jail, lands on Go To Jail, ends up on Just Visiting and their balance is unchanged.', () => {
    let playerTest = new Player(28, "playerTest")
    playerTest.move(2)
    const checkBalance = assert.equal(playerTest.balance, 0);
    const checkLocation = assert.equal(playerTest.location, 10);
    return checkBalance && checkLocation;
})

test('Player starts before Go To Jail, rolls enough to pass over Go To Jail but not enough to land on or pass over go. ' +
    'Their balance is unchanged and they end up where the should based on what they rolled.', () => {
    let playerTest = new Player(28, "playerTest")
    playerTest.move(4)
    const checkBalance = assert.equal(playerTest.balance, 0);
    const checkLocation = assert.equal(playerTest.location, 32);
    return checkBalance && checkLocation;
})

test('During a turn, a Player with an initial total worth of $1800 lands on Income Tax. The balance decreases by $180.', () => {
    let playerTest = new Player(0, "playerTest")
    playerTest.balance = 1800;
    playerTest.move(4)
    return assert.equal(playerTest.balance, 1620);;
})

test('During a turn, a Player with an initial total worth of $2200 lands on Income Tax. The balance decreases by $200.', () => {
    let playerTest = new Player(0, "playerTest")
    playerTest.balance = 2200;
    playerTest.move(4)
    return assert.equal(playerTest.balance, 2000);;
})

test('During a turn, a Player with an initial total worth of $0 lands on Income Tax. The balance decreases by $0.', () => {
    let playerTest = new Player(0, "playerTest")
    playerTest.move(4)
    return assert.equal(playerTest.balance, 0);;
})

test('During a turn, a Player with an initial total worth of $2000 lands on Income Tax. The balance decreases by $200.', () => {
    let playerTest = new Player(0, "playerTest")
    playerTest.balance = 2000;
    playerTest.move(4)
    return assert.equal(playerTest.balance, 1800);;
})

test('During a turn, a Player passes over Income Tax. Nothing happens.', () => {
    let playerTest = new Player(0, "playerTest")
    playerTest.balance = 2000;
    playerTest.move(6)
    return assert.equal(playerTest.balance, 2000);;
})

test('Player takes a turn and lands on Luxury tax. Their balance decreases by $75.', () => {
    let playerTest = new Player(36, "playerTest")
    playerTest.balance = 2000;
    playerTest.move(2)
    return assert.equal(playerTest.balance, 1925);;
})

test('Player passes Luxury Tax during a turn. Their balance is unchanged.', () => {
    let playerTest = new Player(36, "playerTest")
    playerTest.balance = 2000;
    playerTest.move(3)
    return assert.equal(playerTest.balance, 2000);;
})