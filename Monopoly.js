const Game = require('./Game.js')
const Player = require("./Player");

const players = [];
let horse = new Player(0,"Horse")
players.push(horse);
let car = new Player(0,"Car")
players.push(car);
let duck = new Player(0,"duck")
players.push(duck);

let game = new Game(players);
console.log('Game START')
for (let i = 0; i < 20; i++){
    game.play();
    console.log('ROUND:' + game.rounds)
    game.players.forEach(player => {
       console.log(player.name + ' MOVE TO:' + player.location)
    });
}
console.log('Game END')
