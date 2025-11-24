//importera worldListArray

//väljer ut ett random ord i Arrayn

import { gameState, resetGameState, setWord } from "../storage-file/currentGameState.js";
import { wordList } from "../storage-file/wordList.js";

function getRandomWord() {
    const word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase().trim()
    return word
}

function createLetterSlot(letter, index) {
    const divElement = document.createElement('div');
        divElement.classList.add('letter-slot');
        
        const underscoreElement = document.createElement('p')
        underscoreElement.classList.add('underscore')
        underscoreElement.textContent='_'

        const letterElement = document.createElement('p')
        letterElement.classList.add('individual-letter', 'hidden')
        letterElement.textContent = letter
        letterElement.dataset.index = index

        divElement.appendChild(underscoreElement)
        divElement.appendChild(letterElement)

        return divElement
}

function gameLetterDisplay() {
    const letterArray = gameState.currentLetterArray;
    const display = document.querySelector('.game-letter-display')
    display.innerHTML = '';

    letterArray.forEach((letter, i) => {
        const divElement = createLetterSlot(letter, i)
        display.appendChild(divElement)       
    })
}

function newGame() {
    resetGameState()
    const word = getRandomWord()
    setWord(word)
    gameLetterDisplay()
}

export { newGame }

// const button = document.querySelector('button')
// const wordParagraph = document.createElement('p')
   
//     button.addEventListener('click', () => {
//         const word = randomWord()
//         const wordParagraph = document.createElement('p')
// wordParagraph.textContent = word;
// document.body.appendChild(wordParagraph);
// })