// Call the function
//const words = ["javascript", "html", "css", "hangman", "browser"];
//const word = words[Math.floor(Math.random() * words.length)];
let word = "hello";

let guessedWord = Array(word.length).fill("_");
console.log("guessed word length: ", guessedWord.length);
console.log("word lenght: ", word.length)
let remainingAttempts = 9;

const wordDisplay = document.getElementById("wordDisplay");
const lettersContainer = document.getElementById("lettersContainer");
const statusMessage = document.getElementById("statusMessage");
const hangmanImage = document.getElementById("hangmanImage");

function updateWordDisplay() {
    wordDisplay.textContent = guessedWord.join(" ");
}

function updateHangmanImage() {
    hangmanImage.src = `images/hangman/hangman${9 - remainingAttempts}.jpg`;
}

function checkWin() {
    if (guessedWord.join("") === word) {
        wordDisplay.className = "win"
        lettersContainer.innerHTML = "";
        showReplayButton();
    }
    
}

function checkLoss() {
    if (remainingAttempts <= 0) {
        wordDisplay.className = "lose"
        lettersContainer.innerHTML = "";
        showReplayButton();
        wordDisplay.textContent = word;
    }
    
}

function createLetterButtons() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let char of alphabet) {
        const button = document.createElement("span");
        button.textContent = char;
        button.className = "letter";
        button.onclick = function () {
            if (word.includes(char)) {
                word.split("").forEach((letter, index) => {
                    if (letter === char) {
                        guessedWord[index] = char;
                    }
                });
                button.classList.add("correct");
            } else {
                remainingAttempts--;
                button.classList.add("wrong");
                updateHangmanImage();
            }
            button.onclick = null;
            updateWordDisplay();
            checkWin();
            checkLoss();
        };
        lettersContainer.appendChild(button);
    }
}

function setupReplayButton() {
    const replayButton = document.getElementById('replayButton');
    replayButton.addEventListener('click', function() {
        location.reload();
    });
}

function showReplayButton() {
    const replayButton = document.getElementById('replayButton');
    replayButton.style.display = 'block'; // Make button visible
}

document.addEventListener('DOMContentLoaded', function() {
    setupReplayButton();
});

updateWordDisplay();
updateHangmanImage();
createLetterButtons();

