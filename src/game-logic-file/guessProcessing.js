import { gameState, setWinState, setAccuracy, setScore } from '../storage-file/currentGameState.js'
import { revealLetter, mistakeDisplay, guessResultDisplay, guessResultDisplayEnding } from './domCreator.js'
import { hangmanReveal } from './hangManDisplay.js'
import { populateScoreboard } from "../storage-file/scoreBoardDomCreator.js";
import { storeScoreboard } from '../storage-file/appendToStorage.js';
import { showWinOverlay, showLoseOverlay } from '../display-file/overlayUi.js';

function processLetter(letter) {
    let falseGuess = true;

    gameState.currentLetterArray.forEach((arrayLetter, index) => {
        if (arrayLetter === letter) {
            gameState.guessIteration++
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
        gameState.correctGuesses++
        guessResultDisplay(true)
    }
}

function processWord(word) {
    if (word === gameState.currentWord) {
        guessResultDisplay(true)
        gameState.correctGuesses++

        gameState.currentLetterArray.forEach((_, i) => revealLetter(i));
        gameState.guessIteration = gameState.currentWord.length;
        return
    }
    hangmanReveal(gameState.mistakes)
    mistakeDisplay('')
    gameState.mistakes++
    guessResultDisplay(false)
}

function checkGuess(guess) {

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

    if (gameState.mistakes >= gameState.maxMistakes) {
        setWinState(false)
        setAccuracy()
        setScore()
        storeScoreboard();
        showLoseOverlay();
        guessResultDisplayEnding()
        populateScoreboard();
    }

    else if (gameState.guessIteration >= gameState.currentWord.length) {
        setWinState(true)
        setAccuracy()
        setScore()
        storeScoreboard();
        showWinOverlay();
        guessResultDisplayEnding()
        populateScoreboard();
    }
}

export { checkGuess }