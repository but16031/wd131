const buttons = document.querySelectorAll(".button");
const div = document.querySelector(".incorrect-guesses");
const hangingImg = document.getElementById("hanging-img") 
let guess = 1
let missed_letters ="";
let correct_letters = "";

const words = ["javascript", "html", "css", "hangman", "browser"];
const word = words[Math.floor(Math.random() * words.length)];

createWordDisplay(word,"word-display")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let guessedCorrectly = false;

        // Get the button value pressed
        let value = button.textContent.toLocaleLowerCase();

        // Get the elements for the word display
        const wordDisplay = document.querySelectorAll(".word-display .letter .hidden");

        // Check each letter and remove the hidden class if it matches
        wordDisplay.forEach(paragraph => {
            if (value === paragraph.textContent.toLowerCase()) {
                paragraph.classList.remove("hidden");
                guessedCorrectly = true;
                correct_letters += value;
            }
        });

        // Handle duplicate guess alert
        if (missed_letters.indexOf(value.toLowerCase()) !== -1) {
            setTimeout(() => {
                alert("You already guessed that letter, try again.");
            }, 0);
        }

        // Handle incorrect guesses
        if (!guessedCorrectly) {
            console.log(guessedCorrectly);
            missed_letters += value;

            // Create and append the incorrect letter element
            const incorrectParagraph = document.createElement("p");
            incorrectParagraph.innerText = value;
            div.appendChild(incorrectParagraph);

            // Update hangman image and guess count
            hangingImg.setAttribute("src", `images/hangman${guess}.jpg`);
            guess++;
        }

        // Check win/lose conditions
        win_lose = checkword(word, correct_letters);
        console.log(win_lose);
        if (win_lose === "lose") {
            setTimeout(() => alert("You lose"), 0);
        } else if (win_lose === "win") {
            setTimeout(() => alert("You win"), 0);
        }
    });
});

function createWordDisplay(word, ulClass) {
    // Find the <ul> element by its class
    let ulElement = document.querySelector(`.${ulClass}`);
    
    // Ensure the <ul> element exists
    if (!ulElement) {
      console.error(`No <ul> element found with class "${ulClass}"`);
      return;
    }
    
    // Clear the <ul> in case it already contains elements
    ulElement.innerHTML = "";
    
    // Loop through each letter of the word
    for (let letter of word) {
      // Create an <li> element
      let liElement = document.createElement("li");
      liElement.classList.add("letter"); // Add the "letter" class
      
      // Create a <p> element
      let pElement = document.createElement("p");
      pElement.classList.add("hidden"); // Add the "hidden" class
      
      // Set the text content of the <p> to the current letter
      pElement.textContent = letter;
      
      // Append the <p> element to the <li> element
      liElement.appendChild(pElement);
      
      // Append the <li> element to the <ul>
      ulElement.appendChild(liElement);
    }
  }

function checkword(word, missed_letters) {
    //avoid checking the strings if they are not the same length
    if (guess === 10) return "lose";
    else if (word.length === missed_letters.length) return "win";

    // Convert both strings to arrays, sort them, and join them back into strings
    else {
        return "playon";
    }

  }