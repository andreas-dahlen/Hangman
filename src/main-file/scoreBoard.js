
// TODO: 2 den ska innehålla: namn 
// TODO:3 listan ska innehålla: 10 cards som visar de 10 bästa spelarna
// TODO: 4 kunna gå in på scoreborden genom att trycka på en menylängst upp till höger
// TODO: 5 det ska gå att sortera på tid eller datum 
// TODO: lagra i local storage

//TODO: IMPORTANT INFO FROM ANDREAS! 
// gameState.currentUser is available! 
// gameState.winState is available!
//TODO:IMPORNTANT INFO FROM ANDREAS!

import { gameState } from '../storage-file/currentGameState.js';

export function infoToScoreBoard(winner) {

  const scoreBoardName = document.querySelector('.scoreBoardName');
  const scoreBoardGuesses = document.querySelector('.scoreBoard-guesses');
  const scoreBoardWordlength = document.querySelector('.scoreBoard-word-length');
  const scoreBoardTime = document.querySelector('.scoreBoard-time');
  const scoreBoardDate = document.querySelector('.scoreBoard-date');
  const scoreBoardStatus = document.querySelector('.scoreBoard-status');

  console.log(gameState.guessedLetters)

  scoreBoardGuesses.innerText = 'Guesses: ' + gameState.guessedLetters.size;

  scoreBoardWordlength.innerText = 'Word length: ' + gameState.currentLetterArray.length;

  let time = new Date();


  scoreBoardTime.innerText = 'Time: ' + time.toLocaleTimeString();

  scoreBoardDate.innerText = 'Date: ' + time.toDateString();

  

  if (winner == true) {
    scoreBoardStatus.innerText = 'Winner!';
  } else {
    scoreBoardStatus.innerText = 'You lost..';
  }

}




// console.log('hej')

export function populateScoreboard() {

}

