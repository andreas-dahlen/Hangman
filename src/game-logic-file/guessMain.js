import { validateInput } from "./validateGuess.js";
import { checkGuess } from "./guessProcessing.js";
import { showError } from "./domCreator.js";

function guessController() {
    const guessInput = document.querySelector(".guess-bar");

    guessInput.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return

        const guess = guessInput.value.toLowerCase().trim()
        guessInput.value = ''

        const check = validateInput(guess)

        if (!check.valid) {
            showError(check.message)
            return
        }
        checkGuess(guess)
    })
}

export { guessController }