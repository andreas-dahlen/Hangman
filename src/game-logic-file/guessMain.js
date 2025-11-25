//ser om gissningen är korrekt och skickar till wrongGuess eller rightGuess eller loserDisplay eller WinnerDisplay

import { validateInput } from "./validateGuess.js";
import { checkGuess } from "./guessProcessing.js";
import { showError } from "./ui.js";


//main function
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
        //guess is valid and will now be checked if it's a mistake or not.
        checkGuess(guess)
    })
}  

export {guessController}