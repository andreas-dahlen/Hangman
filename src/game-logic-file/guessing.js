//ser om gissningen är korrekt och skickar till wrongGuess eller rightGuess eller loserDisplay eller WinnerDisplay

import { currentLetterArray, currentWord,  } from "../main-file/load.js";






function mainGuess(guess) {
    let found = false;

    currentLetterArray.forEach((letter, i) => {
        if(letter === guess) {
            found = true;
            revealLetter(i);

        }
    })
    if (found === false) {
        failed()
    }
}

function revealLetter(index) {
    const slots = document.querySelectorAll('.letter-slot')
    const slot = slots[index]

    const letter = slot.querySelector('.individual-letter')

    letter.classList.remove('hidden-letter');
}

let mistakes = 0;

function failed() {
mistakes++
console.log(mistakes)
if(mistakes >= 6) {
    console.log('lost')
}

console.log('failed')
}

async function guessReader() {
const guessInput = document.querySelector(".guess-bar");

guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const guess = guessInput.value.toLowerCase()
        console.log('pressed enter')
        if(guess === currentWord) {
            console.log('win')
        }
        else if(guess.length === 1) {
        mainGuess(guess)
        }

    guessInput.value = ''
    }
})
}


export { mainGuess, guessReader}
