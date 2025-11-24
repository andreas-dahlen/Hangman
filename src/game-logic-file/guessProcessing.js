import { gameState } from '../storage-file/currentGameState.js'
import { revealLetter, showWin, showLose, mistakeDisplay } from './ui.js'

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
        }
    //check if you've won
    if (gameState.correctGuessCount >= gameState.currentWord.length) {
        showWin()
    }
}
export { checkGuess }