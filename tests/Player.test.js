const expect = require('chai').expect;

const Player = require('../src/Player.js')


describe('Player movements', () => {
    it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', () => {
        let result = new Player(0, "playerTest");
        result.move(7);
        expect(result).to.have.property('location', 7);
    });

    it('Player on location numbered 39, rolls 6, ends up on location 5', () => {
        let result = new Player(39, "playerTest");
        result.move(6);
        expect(result).to.have.property('location', 5);
    });

    it('During a turn a Player lands on Go and their balance increases by $200.', () => {
        let result = new Player(38, "playerTest");
        result.move(2);
        expect(result).to.have.property('balance', 200);
    });

    it('During a turn a Player lands on some "normal" location and their balance does not change.', () => {
        let result = new Player(0, "playerTest");
        result.move(2);
        expect(result).to.have.property('balance', 0);
    });

    it('Player starts before Go near the end of the Board, rolls enough to pass Go. The - - Player\'s balance increases by $200.', () => {
        let result = new Player(38, "playerTest");
        result.move(7);
        expect(result).to.have.property('balance', 200);
    });

    it('Player starts on Go, takes a turn where the Player does not additionally land on or pass over Go. Their balance remains unchanged.', () => {
        let result = new Player(0, "playerTest");
        result.move(5);
        expect(result).to.have.property('balance', 0);
    });

    it('Player passes go twice during a turn. Their balance increases by $200 each time for a total change of $400.', () => {
        let result = new Player(39, "playerTest");
        result.move(10)
        result.move(36)
        expect(result).to.have.property('balance', 400);
    });

    it('Player starts before Go To Jail, lands on Go To Jail, ends up on Just Visiting and their balance is unchanged.', () => {
        let result = new Player(28, "playerTest");
        result.move(2)
        expect(result).to.have.property('balance', 0);
        expect(result).to.have.property('location', 10);
    });

    it('Player starts before Go To Jail, rolls enough to pass over Go To Jail but not enough to land on or pass over go. ' +
        'Their balance is unchanged and they end up where the should based on what they rolled.', () => {
        let result = new Player(28, "playerTest");
        result.move(4)
        expect(result).to.have.property('balance', 0);
        expect(result).to.have.property('location', 32);
    });

    it('During a turn, a Player with an initial total worth of $1800 lands on Income Tax. The balance decreases by $180.', () => {
        let result = new Player(0, "playerTest");
        result.balance = 1800;
        result.move(4)
        expect(result).to.have.property('balance', 1620);
    });

    it('During a turn, a Player with an initial total worth of $2200 lands on Income Tax. The balance decreases by $200.', () => {
        let result = new Player(0, "playerTest");
        result.balance = 2200;
        result.move(4)
        expect(result).to.have.property('balance', 2000);
    });

    it('During a turn, a Player with an initial total worth of $0 lands on Income Tax. The balance decreases by $0.', () => {
        let result = new Player(0, "playerTest");
        result.move(4)
        expect(result).to.have.property('balance', 0);
    });

    it('During a turn, a Player with an initial total worth of $2000 lands on Income Tax. The balance decreases by $200.', () => {
        let result = new Player(0, "playerTest");
        result.balance = 2000;
        result.move(4)
        expect(result).to.have.property('balance', 1800);
    });

    it('During a turn, a Player passes over Income Tax. Nothing happens.', () => {
        let result = new Player(0, "playerTest");
        result.balance = 2000;
        result.move(6)
        expect(result).to.have.property('balance', 2000);
    });

    it('Player takes a turn and lands on Luxury tax. Their balance decreases by $75.', () => {
        let result = new Player(36, "playerTest");
        result.balance = 2000;
        result.move(2)
        expect(result).to.have.property('balance', 1925);
    });

    it('Player passes Luxury Tax during a turn. Their balance is unchanged.', () => {
        let result = new Player(36, "playerTest");
        result.balance = 2000;
        result.move(3)
        expect(result).to.have.property('balance', 2000);
    })
});





