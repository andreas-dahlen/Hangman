import { gameState } from '../storage-file/currentGameState.js'


function validateInput(guess) {

    if (guess === "") {
        return { valid: false, message: "Write something before guessing"}
    }

    if(!/[a-z]/.test(guess)) {
        return { valid: false, message: "Write only letter or word guesses."}
    }

    if (gameState.guessedLetters.has(guess)) {
        return { valid: false, message: "You have already guessed that!"}
    }

    if (guess.length === gameState.currentWord.length) {
        return {valid: true, type: "word"}
    }

    if (guess.length === 1)
    return {valid: true, type: "letter"}

    if (guess.length > gameState.currentWord.length || guess.length < gameState.currentWord.length) {
        return {valid: false, message: 'You entered wrong amount of letters'}
    }



}

export { validateInput }