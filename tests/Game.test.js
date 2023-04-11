const test = require('node:test');

const assert = require('assert/strict');

const Game = require('../src/Game.js')
const Player = require("../src/Player");
const {expect} = require("chai");

describe('Create a game', () => {
    it('Create a game with two players named Horse and Car.', () => {
        const players = [];

        let horse = new Player(0,"Horse")
        players.push(horse);
        let car = new Player(0,"Car")
        players.push(car);

        let result = new Game(players)
        expect(result).to.have.property('players', players);
        expect(result.players).to.deep.include(horse);
        expect(result.players).to.deep.include(car);
    });

    it('Try to create a game with < 2 or > 8 players. When attempting to play the game, it will fail.', () => {
        const players = [];
        for(let i = 0 ; i < 11; i++){
            let horse = new Player(0,"Horse"+i);
            players.push(horse);
        }

        let result = new Game(players)
        expect(() => result.play()).to.throw();
    });

    it('Create a game with two players named Horse and Car. Within creating 100 games, both orders [Horse, Car] and [car, horse] occur.', () => {
        const players = [];
        let horse = new Player(0,"Horse")
        players.push(horse);
        let car = new Player(0,"Car")
        players.push(car);

        let orderHorse = false, orderCar = false;
        for(let i = 0; i < 100; i++){
            let game = new Game(players);
            if(game.players[0]==horse) orderHorse = true;
            if(game.players[0]==car) orderCar = true;
        }
        expect(orderCar).to.true;
        expect(orderHorse).to.true;
    });
});

describe('Create a game and play', () => {
    it('Create a game and play, verify that the total rounds was 20 and that each player played 20 rounds.', () => {
        const players = [];
        let horse = new Player(0,"Horse")
        players.push(horse);
        let car = new Player(0,"Car")
        players.push(car);
        let duck = new Player(0,"duck")
        players.push(duck);

        let game = new Game(players);
        let rounds20 = false, played20 = true;

        for (let i = 0; i < 20; i++){
            game.play();
        }

        expect(game).to.have.property('rounds', 20);

        game.players.forEach(player => {
            expect(player).to.have.property('turn',20);
        });
    });

    it('Create a game and play, verify that in every round the order of the players remained the same.', () => {
        const players = [];
        let horse = new Player(0,"Horse")
        players.push(horse);
        let car = new Player(0,"Car")
        players.push(car);

        let game = new Game(players);

        let playersOrderStart = game.players[0].name;

        for (let i = 0; i < 20; i++){
            game.play();
            expect(game.players[0]).to.have.property('name',playersOrderStart)
        }
    });
});



