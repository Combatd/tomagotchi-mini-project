// avoid having multiple setInterval() calls

class Tomagotchi {
    constructor() {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 0;
    }
    // add the ability to set your pet's name
    namePet(name) {
       this.name = name;
    }
    // toggle the lighting of the page
    toggleLights() {
        const $tomagotchi = $('#tomagotchi');
        
        if ($tomagotchi.attr('backgroundColor', 'black')) {
            $tomagotchi.attr('backgroundColor', 'white');
        } else {
            $tomagotchi.attr('backgroundColor', 'black');
        }      
        
    }
    playPet() {
        this,boredom -= Math.floor(Math.random() * Math.floor(5));
    }
}
// Tomagotchi is the player to pass in
class Game {
    constructor(tomagotchi) {
        this.tomagotchi = tomagotchi;
    }
    start() {
        Tomagotchi();
    }
    isGameOver(tomagotchi) {
        if (tomagotchi.hunger > 9) {
            console.log(`${tomagotchi.name} is deceased due to hunger!`);
        } else if (tomagotchi.sleepiness > 9) {
            console.log(`${tomagotchi.name} is deceased due to exhaustion!`);
        } else if (tomagotchi.boredom > 9) {
            console.log(`${tomagotchi.name} is deceased due to boredom!`);
        }
    }
}
