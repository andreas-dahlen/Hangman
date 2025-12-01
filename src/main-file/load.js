import { gameState, resetGameState, setWord, setTimeAndDate } from "../storage-file/currentGameState.js";
import { wordList } from "../storage-file/wordList.js";
import { showOverlay } from "../display-file/overlayDecider.js"
import { loadEventListeners } from './buttons.js'

function getRandomWord() {
  const word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase().trim()
  return word
}

function createLetterSlot(letter) {
  const divElement = document.createElement('div');
  divElement.classList.add('letter-slot');

  const underscoreElement = document.createElement('p')
  underscoreElement.classList.add('underscore')
  underscoreElement.textContent = '_'

  const letterElement = document.createElement('p')
  letterElement.classList.add('individual-letter', 'hidden')
  letterElement.textContent = letter

  divElement.appendChild(letterElement)
  divElement.appendChild(underscoreElement)

  return divElement
}

function gameLetterDisplay() {
  const letterArray = gameState.currentLetterArray;
  const display = document.querySelector('.game-letter-display')

  letterArray.forEach((letter, i) => {
    const divElement = createLetterSlot(letter)
    display.appendChild(divElement)
  })
}

function resetAllDomsByClass() {
  const classesToRemove = [
    'overlay-end',
    'hangman-img',
    'wrong-guess-object',
    'letter-slot'
  ];

  classesToRemove.forEach(className => {
    document.querySelectorAll(`.${className}`).forEach(el => el.remove());
  });
}

function newGame() {
  resetGameState()
  resetAllDomsByClass()
  const word = getRandomWord()
  setWord(word)
  gameLetterDisplay()
  setTimeAndDate()
  loadEventListeners('hideoverlays')
  loadEventListeners('scoreboardbutton')
  loadEventListeners('startbutton')
  loadEventListeners('restartbutton')
  showOverlay('name')
}

// function getLongestWord() {
//     let longest = ''

//     for(const word of wordList) {
//         const cleaned = word.toLowerCase().trim()
//         if (cleaned.length > longest.length) {
//             longest = cleaned;
//         }
//     }
//     return longest
// }

export { newGame, resetAllDomsByClass }