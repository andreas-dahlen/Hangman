
// TODO:3 listan ska innehålla: 10 cards som visar de 10 bästa spelarna
// TODO: 4 kunna gå in på scoreborden genom att trycka på en menylängst upp till höger
// TODO: 5 det ska gå att sortera på tid eller datum 

import { loadScoreboard } from './loadFromStorage.js';

function infoToScoreBoard(index) {

  const position = document.querySelector('.scoreboard-display')

  const container = document.createElement('div')
  container.classList.add('scoreboard-players')

  //TODO: skulle kunna lägga på klasser på olika element..?

const scoreBoardName = document.createElement('h3')
const scoreBoardWordLength = document.createElement('p')
const scoreBoardTime = document.createElement('p')
const scoreBoardDate = document.createElement('p')
const scoreBoardWinState = document.createElement('p')

//TODO: behöver score, accurecy, mistakes!!


  // const scoreBoardName = document.querySelector('.scoreboard-name');
  // const scoreBoardGuesses = document.querySelector('.scoreBoard-guesses');
  // const scoreBoardWordlength = document.querySelector('.scoreboard-word-length');
  // const scoreBoardTime = document.querySelector('.scoreboard-time');
  // const scoreBoardDate = document.querySelector('.scoreboard-date');
  // const scoreBoardresult = document.querySelector('.scoreboard-result');

  // console.log(gameState.currentUser);

  //TODO: Den ska alltså ta informationen från storage

//informationen från loadScoreboard stoppas i scoreboard

  let scoreboard = loadScoreboard(); 

  //Jag tror att man behöver hämta från scoreboarden med hjälp av index? Madde du får lista ut hur man hittar t.ex. currentUserStats.name för position 0-slut.
  let currentUserStats = scoreboard[index]

  scoreBoardName.innerText = 'Name: ' + currentUserStats.name;
  
  scoreBoardWordLength.innerText = 'Word length: ' + currentUserStats.wordLength;

  scoreBoardTime.innerText = 'Time: ' + currentUserStats.time;

  scoreBoardDate.innerText = 'Date: ' + currentUserStats.date;

  scoreBoardWinState.innerText = currentUserStats.winState;

  container.appendChild(scoreBoardName)
  container.appendChild(scoreBoardWordLength)
  container.appendChild(scoreBoardTime)
  container.appendChild(scoreBoardDate)
  container.appendChild(scoreBoardWinState)
  position.appendChild(container)
}

function populateScoreboard() {
 console.log('denna ska pupulera scoreboarden med hjälp av en itiration av loadScoreBoard och anropa infotoscoreboard')
//Man kan göra liknande process som i guessProccessing.js vid word / letter processing. 
let list = loadScoreboard()

list.forEach ((scoreObject, index)=> {

    infoToScoreBoard(index)
  }) 
}

export { populateScoreboard }


