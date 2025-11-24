import { gameState } from '../storage-file/currentGameState.js'
import { revealLetter, showWin, showLose, mistakeDisplay } from './ui.js'
import {winGame, loseGame} from './gameEnding.js'


function getLetterPositions(letter) {
    let array = [];
    gameState.currentLetterArray.forEach((l, index) => {
        if (l === letter) array.push(index);
    });
    return array;
}

function processLetter(letter) {
    const positions = getLetterPositions(letter);    
    if (positions.length > 0) {
        positions.forEach(pos => {
            revealLetter(pos)
            gameState.correctGuessCount++
        });
        return true
    } else {
        gameState.mistakes++
        return false   
    } 
 }

function processWord(word) {
    if (word === gameState.currentWord) {
        gameState.currentLetterArray.forEach((_, i) => revealLetter(i));
        gameState.correctGuessCount = gameState.currentWord.length;
        return true
    } else {
        gameState.mistakes++
        return false 
    }
}

function wrongGuess(guess) {

    if (guess.length === 1) {
        mistakeDisplay(guess)
    } else {
        mistakeDisplay('')
    }

    if (gameState.mistakes >= gameState.maxMistakes) {
        loseGame()
    }
}

function rightGuess () {
    if (gameState.correctGuessCount >= gameState.currentWord.length) {
        winGame()
    }
}

function checkGuess (guess, type) {
    let isCorrect

    if (type === 'word') isCorrect = processWord(guess)
    if (type === 'letter') {
        isCorrect = processLetter(guess)
        gameState.guessedLetters.add(guess)
    }

    if (isCorrect) rightGuess()
    else wrongGuess(guess)
}

export { checkGuess }