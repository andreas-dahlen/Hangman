import { gameState } from '../storage-file/currentGameState.js'
import { revealLetter, mistakeDisplay, guessResultDisplay } from './ui.js'
import { hangmanReveal } from './hangManDisplay.js'
import { showWin, showLose } from '../display-file/overlayUi.js'
import { infoToScoreBoard } from "../main-file/scoreBoard.js";

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
    hangmanReveal()
    mistakeDisplay('')
    gameState.mistakes++
    guessResultDisplay(false)
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
        winState(false)
        //TODO: needs to append win/lose to the gameState object
        // showLose(gameState.currentWord) TODO: bortkommenterade då den inte är implementerats än. Ta bort denna kommentar när det är gjort!
        console.log(`you lost. ${gameState}`)
        infoToScoreBoard(false);
    }
    //check if you've won
    else if (gameState.correctGuessCount >= gameState.currentWord.length) {
        showWin()
        winState(true)
        //TODO: needs to append win/lose to the gameState object
        // showWin(gameState.currentWord); TODO: bortkommenterade då den inte är implementerats än. Ta bort denna kommentar när det är gjort!
        console.log(`you won. ${gameState}`)
        infoToScoreBoard(true);
    }
}
export { checkGuess }