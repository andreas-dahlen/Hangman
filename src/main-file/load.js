//importera worldListArray

//väljer ut ett random ord i Arrayn

import { gameState, resetGameState, setWord, setTimeAndDate } from "../storage-file/currentGameState.js";
//importera även timeLog
import { wordList } from "../storage-file/wordList.js";
import { showOverlay} from "../display-file/overlayDecider.js"
import { scoreBoardButton } from './buttons.js'

//generates a random word
function getRandomWord() {
    const word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase().trim()
    return word
}

//creates 1 div element with 2 p elements inside (1 letter in the word)
function createLetterSlot(letter) {
    const divElement = document.createElement('div');
        divElement.classList.add('letter-slot');
        
        const underscoreElement = document.createElement('p')
        underscoreElement.classList.add('underscore')
        underscoreElement.textContent='_'

        const letterElement = document.createElement('p')
        letterElement.classList.add('individual-letter', 'hidden')
        letterElement.textContent = letter
        
        divElement.appendChild(letterElement)
        divElement.appendChild(underscoreElement)
        

        return divElement
}

//calls the function above to generate all div elements for word display
function gameLetterDisplay() {
    const letterArray = gameState.currentLetterArray;
    const display = document.querySelector('.game-letter-display')
    display.innerHTML = '';

    letterArray.forEach((letter, i) => {
        const divElement = createLetterSlot(letter)
        display.appendChild(divElement)       
    })
}

function loadEventListeners() {
    scoreBoardButton()

}

//resets and starts the game
function newGame() {
    resetGameState()
    const word = getLongestWord()
    //TODO: RESET THIS TO GETRANDOM WORD! THIS IS FOR CSS TESTING
    setWord(word)
    gameLetterDisplay()
    setTimeAndDate()
    showOverlay('name')
}


//TODO: DELETE THIS FUNCTION!
function getLongestWord() {
    let longest = ''

    for(const word of wordList) {
        const cleaned = word.toLowerCase().trim()
        if (cleaned.length > longest.length) {
            longest = cleaned;
        }
    }
    return longest
}

export { newGame, loadEventListeners}