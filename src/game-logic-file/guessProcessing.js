import { gameState } from '../storage-file/currentGameState.js'
import { revealLetter, mistakeDisplay } from './ui.js'
import { hangmanReveal } from './hangManDisplay.js'
import { showWin, showLose } from '../display-file/overlayUi.js'

function processLetter(letter) {
    let falseGuess = true;

    gameState.currentLetterArray.forEach((arrayLetter, index) => {
        if(arrayLetter === letter) {
            gameState.correctGuessCount++
            revealLetter(index)
            falseGuess = false
        }
    })
    if (falseGuess) {
        hangmanReveal(gameState.mistakes)
        mistakeDisplay(letter)
        gameState.mistakes++
    }
}

function processWord(word) {
    if (word === gameState.currentWord) {
        gameState.currentLetterArray.forEach((_, i) => revealLetter(i));
        gameState.correctGuessCount = gameState.currentWord.length;
        return
    }
    hangmanReveal()
    mistakeDisplay('')
    gameState.mistakes++
}

function checkGuess (guess) {

    //get the logic of word or letter here
    if (guess.length === gameState.currentWord.length) {
        processWord(guess)
        gameState.guessedWords.add(guess)
    }
    else if (guess.length === 1) {
        processLetter(guess)
        gameState.guessedLetters.add(guess)
    } else {
        console.warn('unexpected word length')
    }    
    //check if you've lost
    if (gameState.mistakes >= gameState.maxMistakes) {
        showLose()
        //needs to append win to the gameState object
    }
    //check if you've won
    else if (gameState.correctGuessCount >= gameState.currentWord.length) {
        showWin()
    }
}
export { checkGuess }