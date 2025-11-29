import { wordList } from './storage-file/wordList.js';

console.log(wordList); // ["apples", "apricot"...]

// Här kan du börja skapa spelets logik
let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);
