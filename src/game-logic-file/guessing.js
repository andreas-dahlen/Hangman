//ser om gissningen är korrekt och skickar till wrongGuess eller rightGuess eller loserDisplay eller WinnerDisplay

import { currentLetterArray, currentWord,  } from "../main-file/load.js";

function guessEvaluation (guess) {
    let letterPos = []

    currentLetterArray.forEach((letter, i) => {
        if(letter === guess) {
            letterPos.push(i)

        }
    })
    return {
        hit: letterPos.length > 0,
        letterPos
    }
}


let mistakes = 0;
let guessedLetters= new Set();


function guessController() {
const guessInput = document.querySelector(".guess-bar");

    guessInput.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return
            
            
            const guess = guessInput.value.toLowerCase().trim()
            guessInput.value = ''

            const check = validateInput(guess)

            if(!check.valid) {
                showError(check.message)
                return
            }

        checkGuess(guess, check.type)
    })
}  

function checkGuess (guess, type) {

    if (type === "word") {
        if (guess === currentWord) winGame()
            else failed();
        return
    }

    if (guessedLetters.has(guess)) {
        console.log("already guessed")
        return;
    }

    guessedLetters.add(guess);
    guessProcessing(guess);
}

function guessProcessing (guess) {
    const result = guessEvaluation(guess)

    if (result.hit) {
        result.letterPos.forEach(i => revealLetter(i));
    } else {
        failed();
    }
}

function revealLetter(index) {
    const slots = document.querySelectorAll('.letter-slot')
    const slot = slots[index]

    slot.querySelector('.individual-letter').classList.remove('hidden-letter');
}

function failed() {
mistakes++
if(mistakes >= 6) loseGame()
}

function validateInput(guess) {
    if (guess === "") {
        return { valid: false, message: "Write something before guessing"}
    }

    if (guess.length === currentWord.length) {
        return {valid: true, type: "word"}
    }
    if(!/[a-z]/.test(guess)) {
        return { valid: false, message: "Guess ONE letter or correct word length."}
    }
    return {valid: true, type: "letter"}
}



export {guessController}


        // console.log('pressed enter')
        // if(guess === currentWord) {
        //     console.log('win')
        // }
        // else if(guess.length === 1) {
        // mainGuess(guess)
        // }

    
  


// export { mainGuess, guessReader}

