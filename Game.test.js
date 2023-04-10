const test = require('node:test');

const assert = require('assert/strict');

const Game = require('./Game.js')
const Player = require("./Player");

// Create a game with two players named Horse and Car.
test('Create a game with two players named Horse and Car.', () => {
    const players = [];

    let horse = new Player(0,"Horse")
    players.push(horse);
    let car = new Player(0,"Car")
    players.push(car);

    let gameTest = new Game(players)
    return assert.equal(gameTest.players.includes(horse)&&gameTest.players.includes(car), true);
});

//Try to create a game with < 2 or > 8 players. When attempting to play the game, it will fail.
test('Try to create a game with < 2 or > 8 players. When attempting to play the game, it will fail.', () => {
    const players = [];
    for(let i = 0 ; i < 11; i++){
        let horse = new Player(0,"Horse"+i);
        players.push(horse);
    }

    let gameTest = new Game(players)
    return assert.equal(gameTest.play(),false);
});

//Create a game with two players named Horse and Car. Within creating 100 games, both orders [Horse, Car] and [car, horse] occur.

test('Create a game with two players named Horse and Car. Within creating 100 games, both orders [Horse, Car] and [car, horse] occur.', () => {
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

    return assert.equal(orderHorse&&orderCar,true);
});

//Create a game and play, verify that the total rounds was 20 and that each player played 20 rounds.

test('Create a game and play, verify that the total rounds was 20 and that each player played 20 rounds.', () => {
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

    rounds20 = game.rounds==20;
    game.players.forEach(player => {
        if(player.turn!=20) played20 = false;
    })

    return assert.equal(
        rounds20&&played20
        ,true);
});

//Create a game and play, verify that in every round the order of the players remained the same.

test('Create a game and play, verify that in every round the order of the players remained the same.', () => {
    const players = [];
    let horse = new Player(0,"Horse")
    players.push(horse);
    let car = new Player(0,"Car")
    players.push(car);

    let game = new Game(players);
    let sameOrder = true

    let playersOrderStart = game.players[0].name;

    for (let i = 0; i < 20; i++){
        game.play();
        if(playersOrderStart!=game.players[0].name) sameOrder = false;
    }

    return assert.equal(
        sameOrder
        ,true);
});

