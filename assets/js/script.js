document.addEventListener("DOMContentLoaded", function () {

     // List of Words and their hints
const words = [
    { word: "gravity", hint: "Force that attracts objects towards a planet" },
    { word: "orbit", hint: "Path followed by a celestial body" },
    { word: "star", hint: "Luminous celestial body in the night sky" },
    { word: "astronaut", hint: "Person trained to travel in space" },
    { word: "planet", hint: "Large celestial body that orbits a star" },
    { word: "comet", hint: "Small icy body that emits a glowing tail" },
    { word: "galaxy", hint: "A system of stars, gas, and dust bound by gravity" },
    { word: "moon", hint: "Natural satellite of a planet" },
    { word: "nebula", hint: "A cloud of gas and dust in space" },
    { word: "constellation", hint: "A group of stars forming a recognizable pattern" },
    { word: "asteroid", hint: "Small rocky body that orbits the sun" },
    { word: "blackhole", hint: "A region in space with a gravitational pull so strong that not even light can escape" },
    { word: "universe", hint: "All of space and everything in it" },
    { word: "spacecraft", hint: "Vehicle designed for travel in space" },
    { word: "solar", hint: "Relating to the sun" },
    { word: "satellite", hint: "Object that orbits a planet or star" },
    { word: "eclipse", hint: "Event when one celestial body passes in front of another" },
    { word: "lightyear", hint: "Distance light travels in one year" },
    { word: "rocket", hint: "A vehicle propelled by rocket engines" },
    { word: "meteor", hint: "A small body of matter from space that enters Earth's atmosphere" },
    { word: "sun", hint: "Star at the centre of our solar system" },
    { word: "milkyway", hint: "The galaxy that contains our solar system" },
    { word: "telescope", hint: "Instrument used for observing distant celestial objects" },
    { word: "hubble", hint: "Space telescope that observes distant stars and galaxies" },
    { word: "spacesuit", hint: "Suit worn by astronauts in space" },
    { word: "void", hint: "Empty space, especially in outer space" },
    { word: "alien", hint: "Extraterrestrial life form" },
    { word: "spacewalk", hint: "Activity in which astronauts float outside their spacecraft" },
    { word: "quasar", hint: "An extremely bright and distant active galactic nucleus" },
    { word: "radiation", hint: "Energy emitted in the form of rays or particles" },
    { word: "wormhole", hint: "A theoretical passage through space-time" },
    { word: "supernova", hint: "A star that explodes in a burst of light and energy" },
    { word: "pulsar", hint: "A highly magnetized rotating neutron star emitting beams of radiation" },
    { word: "starlight", hint: "Light emitted by stars" },
    { word: "fusion", hint: "The process that powers stars, fusing light elements into heavier ones" },
    { word: "interstellar", hint: "Between or among stars" },
    { word: "exoplanet", hint: "A planet outside our solar system" },
    { word: "solarflare", hint: "A sudden eruption of energy from the sun" },
    { word: "celestial", hint: "Relating to the sky or outer space" },
    { word: "antimatter", hint: "Matter made up of antiparticles, opposite of regular matter" },
    { word: "vortex", hint: "A whirling mass of fluid or gas" },
    { word: "meteorite", hint: "A meteor that reaches Earth's surface" },
    { word: "satellite", hint: "An object that orbits around a planet" },
    { word: "solarwind", hint: "Stream of charged particles released from the sun's atmosphere" },
    { word: "radio", hint: "A type of wave used in communication with distant objects in space" },
    { word: "earth", hint: "The third planet from the Sun, home to life." }
];

    // Element references  
    const inputField = document.querySelector("input");
    const wordText = document.querySelector(".word");
    const hintText = document.querySelector(".hint span");
    const timeText = document.querySelector(".timer span");

    let correctWord = "";
    let timer;
    let timeLeft = 20;

    // Start a new round 
    function initGame() {
        let randomObj = words[Math.floor(Math.random() * words.length)];
        correctWord = randomObj.word.toLowerCase();
        wordText.innerText = randomObj.word;
        hintText.innerText = randomObj.hint;
    }

    // Scramble the letters of a word
    function scrambleWord() {

    }

    // Check what the user typed
    function checkAnswer() {
        console.log("Checking anwser");
    }
    
     // Add event listeners for buttons  
     document.querySelector(".new-word").addEventListener("click", initGame);
     document.querySelector(".submit").addEventListener("click", checkAnswer); 

     
    initGame();
});

