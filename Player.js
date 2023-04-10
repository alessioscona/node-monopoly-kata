class Player{

    constructor(location, name) {
        this.location = location;
        this.name = name;
        this.numberLocations = 40;
        this.turn = 0;
    }

    move(diceValue){
        this.location = (this.location + diceValue) % this.numberLocations;
        this.turn++;
        return this.location;
    }

    play(){
        let diceValue = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6)
        this.move(diceValue);
    }
}

module.exports = Player