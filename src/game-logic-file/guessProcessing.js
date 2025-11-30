import { gameState, setWinState, setAccuracy, setScore} from '../storage-file/currentGameState.js'
import { revealLetter, mistakeDisplay, guessResultDisplay, guessResultDisplayEnding} from './domCreator.js'
import { hangmanReveal } from './hangManDisplay.js'
import { populateScoreboard } from "../storage-file/scoreBoardDomCreator.js";
import { storeScoreboard } from '../storage-file/appendToStorage.js'; //importerar funktion från appendToStorage, sparar spelets resultat i localStorage när spelet slutar
import { showWinOverlay, showLoseOverlay } from '../display-file/overlayUi.js'; // Importerar funktion från overlayUi.js, 


function processLetter(letter) {
    let falseGuess = true;

    gameState.currentLetterArray.forEach((arrayLetter, index) => {
        if(arrayLetter === letter) {
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
        setWinState(false)
        setAccuracy()
        setScore()
        storeScoreboard();//lagrar gameState när spelaren har vunnit eller förlorat
        showLoseOverlay(); // För förlust /Emma
        guessResultDisplayEnding() 
        populateScoreboard();   
    }
    //check if you've won
    else if (gameState.guessIteration >= gameState.currentWord.length) {
        setWinState(true)
        setAccuracy()
        setScore()
        storeScoreboard(); //lagrar gameState när spelaren har vunnit eller förlorat
        showWinOverlay(); // För vinst /Emma
        guessResultDisplayEnding()
        populateScoreboard();
    }
}
export { checkGuess }