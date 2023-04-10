class Game{
    constructor(players) {
        this.players = this.randomOrder(players);
        this.rounds = 0;
    }

    play(rounds){
        if(this.players.length<2||this.players.length>8) return false;

        this.players.forEach(player => player.play())
        this.rounds++;

        return true;
    }

    //Fisher–Yates shuffle
    randomOrder(players){
        let index = players.length;
        let random;
        while (index != 0) {
            random = Math.floor(Math.random() * index);
            index--;
            [players[index], players[random]] = [players[random], players[index]];
        }
        return players;
    }





}
module.exports = Game;