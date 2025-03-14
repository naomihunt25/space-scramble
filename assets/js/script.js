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
    const volumeButton = document.getElementById('volume-button');
    const backgroundMusic = document.getElementById('background-music');
    const inputField = document.querySelector("input");
    const wordText = document.querySelector(".word");
    const hintText = document.querySelector(".hint span");
    const timeText = document.querySelector(".timer span");

    // Function to toggle the audio state (play/pause) and icon
    volumeButton.addEventListener('click', function () {
        if (backgroundMusic.paused) {
            backgroundMusic.play(); // Play the music
            volumeButton.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>"; // Mute icon
        } else {
            backgroundMusic.pause(); // Pause the music
            volumeButton.innerHTML = "<i class='fa-solid fa-volume-high'></i>"; // Unmute icon
        }
    });

    // Initial check to set the correct icon based on whether the audio is already playing
    if (backgroundMusic.paused) {
        volumeButton.innerHTML = "<i class='fa-solid fa-volume-high'></i>"; // Volume icon when audio is paused
    } else {
        volumeButton.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>"; // Mute icon when audio is playing
    }

    let correctWord = ""; // This will be updated when a new word is chosen
    let timer;
    let timeLeft = 20; // Default time set to 20 seconds

    // Function to initialize the timer
    function initTimer() {
        clearInterval(timer); // Reset previous timer
        timeLeft = 20; // Reset countdown to 20 seconds
        timeText.innerText = timeLeft; // Update displayed time immediately

        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                timeText.innerText = timeLeft; // Update countdown display
            } else {
                clearInterval(timer);
                alert(`Out of time! ${correctWord.toUpperCase()} was the correct word`);
                initGame(); // Restart game
            }
        }, 1000);
    }

    // Function to initialize the game by choosing a random word
    function initGame() {
        initTimer(); // Initialize the timer at the start of each game
        let randomObj = words[Math.floor(Math.random() * words.length)];
        correctWord = randomObj.word.toLowerCase();
        let wordArray = randomObj.word.split("");
        scrambleWord(wordArray);
        wordText.innerText = wordArray.join("");
        hintText.innerText = randomObj.hint;
        inputField.value = ""; // Clear previous input
    }

    // Scramble the letters of the word
    function scrambleWord(wordArray) {
        for (let i = wordArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
    }

    // Function to check if the user's input matches the correct word
    function checkWord() {
        let userWord = inputField.value.toLowerCase();
        if (!userWord) {
            alert("Please enter a word!");
            return;
        }
        if (userWord === correctWord) {
            alert("Congratulations! You guessed the correct word!");
            initGame(); // Start a new game after correct guess
        } else {
            alert("Oh no! That is not the correct word!");
        }
        inputField.value = ""; // Clear the input field after checking
    }

    // Add keydown event listener for the Enter key
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkWord();  // Trigger checkWord when Enter key is pressed
        }
    });

    // Add event listeners for buttons  
    document.querySelector(".new-word").addEventListener("click", initGame);
    document.querySelector(".submit").addEventListener("click", checkWord);

    // Initialize the game when the page loads
    initGame();
});
