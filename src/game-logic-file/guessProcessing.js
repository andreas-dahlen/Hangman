import { gameState, winState } from '../storage-file/currentGameState.js'
import { revealLetter, mistakeDisplay, guessResultDisplay } from './domCreator.js'
import { hangmanReveal } from './hangManDisplay.js'
import { updateWin, updateLose } from '../display-file/overlayUi.js'
import { infoToScoreBoard } from "../storage-file/scoreBoardDomCreator.js";
import { showOverlay } from '../display-file/overlayDecider.js'
import { storeGameState } from '../storage-file/appendToStorage.js'; //importerar funktion från appendToStorage

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
        guessResultDisplay(false)
    } else {
        guessResultDisplay(true)
    }
}

function processWord(word) {

    if (word === gameState.currentWord) {
        guessResultDisplay(true)

        gameState.currentLetterArray.forEach((_, i) => revealLetter(i));
        gameState.correctGuessCount = gameState.currentWord.length;
        return
    }
    hangmanReveal(gameState.mistakes)
    mistakeDisplay('')
    gameState.mistakes++
    guessResultDisplay(false)
}

//make a hint process... gives a mistake and reveals a letter

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
        updateLose()
        showOverlay('loser')
        winState(false)
        console.log(`you lost.`)
        infoToScoreBoard();
        storeGameState(); //lagrar gameState när spelaren har vunnit eller förlorat

    }
    //check if you've won
    else if (gameState.correctGuessCount >= gameState.currentWord.length) {
        updateWin()
        showOverlay('winner')
        winState(true)
        console.log(`you won.`)
        infoToScoreBoard();
        storeGameState(); //lagrar gameState när spelaren har vunnit eller förlorat


    }
}
export { checkGuess }