//importera worldListArray

//väljer ut ett random ord i Arrayn

import { wordList } from "../storage-file/wordList.js";

// console.log(wordList)
// 

// function letterArray(word) {
//     const letters = {}
//     for (let i = 0; i < word.length; i++) {
//         letters["letter" + (i + 1)] = word[i];
//     }
//     console.log(letters)
//     return letters
// }

function getRandomWord() {
    const word = wordList[Math.floor(Math.random() * wordList.length)]
    return word
}

let currentWord = ''
let currentLetterArray = []

function newWordArray() {
    currentWord = getRandomWord()
    currentLetterArray = [...currentWord]
    return currentLetterArray
}

function createLetterSlot(letter, index) {
    const divElement = document.createElement('div');
        divElement.classList.add('letter-slot');
        
        const underscoreElement = document.createElement('p')
        underscoreElement.classList.add('underscore')
        underscoreElement.textContent='_'

        const letterElement = document.createElement('p')
        letterElement.classList.add('individual-letter', 'hidden-letter')
        letterElement.textContent = letter
        letterElement.dataset.index = index

        divElement.appendChild(underscoreElement)
        divElement.appendChild(letterElement)

        return divElement
}

function gameLetterDisplay() {
    const letterArray = currentLetterArray;
    const display = document.querySelector('.game-letter-display')
    display.innerHTML = '';

    letterArray.forEach((letter, i) => {
        const divElement = createLetterSlot(letter, i)
        display.appendChild(divElement)       
    }
    
)};


export { gameLetterDisplay, newWordArray, currentLetterArray, currentWord }

// const button = document.querySelector('button')
// const wordParagraph = document.createElement('p')
   
//     button.addEventListener('click', () => {
//         const word = randomWord()
//         const wordParagraph = document.createElement('p')
// wordParagraph.textContent = word;
// document.body.appendChild(wordParagraph);
// })