//importera worldListArray

//väljer ut ett random ord i Arrayn

import { wordList } from "../storage-file/wordList.js";

// console.log(wordList)

export function randomWord() {
    let word = wordList[Math.floor(Math.random() * wordList.length)]
    return word
}


// const button = document.querySelector('button')
// const wordParagraph = document.createElement('p')
   
//     button.addEventListener('click', () => {
//         const word = randomWord()
//         const wordParagraph = document.createElement('p')
// wordParagraph.textContent = word;
// document.body.appendChild(wordParagraph);
// })