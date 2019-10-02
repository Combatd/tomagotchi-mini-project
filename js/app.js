// avoid having multiple setInterval() call

class Tomagotchi {
    constructor(name) {
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
    // toggle the lighting of the page (sleeping)
    sleep() {
        this.sleepiness -= Math.floor(Math.random() * Math.floor(5));
        if (this.sleepiness < 1) {
            this.sleepiness = 1;
        }
    }
    play() {
        this.boredom-=Math.floor(Math.random() * Math.floor(5));
        if (this.boredom < 1) {
            this.boredom = 1;
        }
    }
    feed() {
        this.hunger -= Math.floor(Math.random() * Math.floor(5));
        if (this.hunger < 1) {
            this.hunger = 1;
        }
    }
}
// Tomagotchi is the player to pass in
const game = {
    start(name) {
        this.name = name; // pass it in
        tomagotchi = new Tomagotchi(name);
        console.log(tomagotchi);
        const intervalId = setInterval(function () {
            game.increaseAge(tomagotchi);
            console.log(tomagotchi);
            if (game.isGameOver(tomagotchi) === "gameover") {
                clearInterval(intervalId) // end the setInterval
            }; // check isGameOver
        }, 1000) 
    },
    // You pet should die if Hunger, Boredom, or Sleepiness hits 10.
    isGameOver(tomagotchi) {
        if (tomagotchi.hunger > 10) {
            alert(`${tomagotchi.name} is deceased due to hunger!`);
            return "gameover";
        } else if (tomagotchi.sleepiness > 10) {
            alert(`${tomagotchi.name} is deceased due to exhaustion!`);
            return "gameover";
        } else if (tomagotchi.boredom > 10) {
            alert(`${tomagotchi.name} is deceased due to boredom!`);
            return "gameover";
        }
    },
    // Increase your pet's age every x minutes
    increaseAge(tomagotchi) {
        tomagotchi.age++
        // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
        tomagotchi.hunger+= Math.floor(Math.random() * Math.floor(3));
        tomagotchi.sleepiness+=Math.floor(Math.random() * Math.floor(3));
        tomagotchi.boredom += Math.floor(Math.random() * Math.floor(3));
    },

} // end game object

// event listeners
$('#feed').on('click', () => {
    // reduce hunger of pet
    tomagotchi.feed();
});

$('#sleep').on('click', () => {
    tomagotchi.sleep();
});

$('#play').on('click', () => {
    tomagotchi.play();
});

game.start("Rusty"); // should pass in correctly