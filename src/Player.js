class Player{

    constructor(location, name) {
        this.location = location;
        this.name = name;
        this.numberLocations = 40;
        this.turn = 0;
        this.balance = 0;
    }

    move(diceValue){
        let beforeLocation = this.location;
        this.location = (beforeLocation + diceValue) % this.numberLocations;
        this.turn++;
        this.locationManager(beforeLocation)
        return this.location;
    }

    locationManager(beforeLocation){
        //Player passes go
        if(beforeLocation>this.location){
            this.balance+=200;
        }
        //lands on Go To Jail
        if(this.location==30){
            this.location = 10;
        }
        //lands on Income Tax
        if(this.location==4){
            let tax = this.balance/100*10;
            if(tax>200) tax=200;
            this.balance -= tax;
        }
        //lands on Luxury tax
        if(this.location==38){
            this.balance -= 75;
        }
    }

    play(){
        let diceValue = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1)
        this.move(diceValue);
    }

}

module.exports = Player