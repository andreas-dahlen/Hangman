
// TODO:3 listan ska innehålla: 10 cards som visar de 10 bästa spelarna
// TODO: 4 kunna gå in på scoreborden genom att trycka på en menylängst upp till höger
// TODO: 5 det ska gå att sortera på tid eller datum 

//TODO: FLYTTA TILL UI I GAME_LOGIC_FILE

import { gameState } from './currentGameState.js';

export function infoToScoreBoard() {

  const scoreBoardName = document.querySelector('.scoreboard-name');
  // const scoreBoardGuesses = document.querySelector('.scoreBoard-guesses');
  const scoreBoardWordlength = document.querySelector('.scoreboard-word-length');
  const scoreBoardTime = document.querySelector('.scoreboard-time');
  const scoreBoardDate = document.querySelector('.scoreboard-date');
  const scoreBoardStatus = document.querySelector('.scoreboard-status');

  console.log(gameState.currentUser);

  //TODO: Den ska alltså ta informationen från storage

  scoreBoardName.innerText = 'Name: ' + gameState.currentUser;
  
//TODO: behöver score, accurecy, mistakes, 

  scoreBoardWordlength.innerText = 'Word length: ' + gameState.currentWord.length;

  scoreBoardTime.innerText = 'Time: ' + gameState.time;

  scoreBoardDate.innerText = 'Date: ' + gameState.date;

  scoreBoardStatus.innerText = gameState.winState

}




// console.log('hej')

export function populateScoreboard() {

}

