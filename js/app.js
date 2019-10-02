// avoid having multiple setInterval() call

class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 0;
    }
     
    // toggle the lighting of the page (sleeping)
    sleep() {
        this.sleepiness -= Math.floor(Math.random() * Math.floor(5));
        if (this.sleepiness < 1) {
            this.sleepiness = 1;
        }
        game.displayStats();
    }
    play() {
        this.boredom-=Math.floor(Math.random() * Math.floor(5));
        if (this.boredom < 1) {
            this.boredom = 1;
        }
        game.displayStats();
    }
    feed() {
        this.hunger -= Math.floor(Math.random() * Math.floor(5));
        if (this.hunger < 1) {
            this.hunger = 1;
        }
        game.displayStats();
    }
}
// Tomagotchi is the player to pass in
const game = {
    start(name) {
        this.name = name; // pass it in
        tomagotchi = new Tomagotchi(name);
        console.log(tomagotchi);
        $('#pet-img').attr('src', 'img/bulbasaur.png');
        this.displayStats(); // update DOM for stats
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
            $('#pet-img').attr('src', '');
            return "gameover";
        } else if (tomagotchi.sleepiness > 10) {
            alert(`${tomagotchi.name} is deceased due to exhaustion!`);
            $('#pet-img').attr('src', '');
            return "gameover";
        } else if (tomagotchi.boredom > 10) {
            alert(`${tomagotchi.name} is deceased due to boredom!`);
            $('#pet-img').attr('src', '');
            return "gameover";
        } else if (tomagotchi.age > 99) {
            alert(`${tomagotchi.name} has died of old age!`);
            $('#pet-img').attr('src', '');
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

        if (tomagotchi.age > 15) {
            $('#pet-img').attr('src', 'img/ivysaur.gif');
        } 
        
        if (tomagotchi.age > 30) {
            $('#pet-img').attr('src', 'img/venusaur.png');
        }
    },
    displayStats() {
        const $name = $('#tomagotchi-name');
        const $age = $('#tomagotchi-age');
        const $hunger = $('#tomagotchi-hunger');
        const $sleepiness = $('#tomagotchi-sleepiness');
        const $boredom = $('#tomagotchi-boredom');
        $name.text(`Name: ${tomagotchi.name}`);
        $age.text(`Age: ${tomagotchi.age}`);
        $hunger.text(`Hunger: ${tomagotchi.hunger}`);
        $sleepiness.text(`Sleepiness: ${tomagotchi.sleepiness}`);
        $boredom.text(`Boredom: ${tomagotchi.boredom}`);
    }
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

$('#new-pet').on('click', () => {
    // add the ability to set your pet's name
    const petName = document.querySelector('#name-entry').value
    game.start(petName);
});

// game.start("Rusty"); // should pass in correctly