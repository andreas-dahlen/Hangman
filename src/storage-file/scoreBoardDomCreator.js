
// TODO: 4 kunna gå in på scoreborden genom att trycka på en menylängst upp till höger
// TODO: 5 det ska gå att sortera på tid eller datum 

import { loadScoreboard } from './loadFromStorage.js';


function infoToScoreBoard(index) {

  const position = document.querySelector('.scoreboard-dom')
  const container = document.createElement('div')
  container.classList.add('scoreboard-players')  //TODO: skulle kunna lägga på klasser på olika element..?//TODO: behöver score, accurecy, mistakes!!
  const scoreBoardName = document.createElement('h3')
  const scoreBoardWordLength = document.createElement('p')
  const scoreBoardGuessedLetters = document.createElement('p')
  const scoreBoardTime = document.createElement('p')
  const scoreBoardDate = document.createElement('p')
  const scoreBoardWinState = document.createElement('p')

  let scoreboard = loadScoreboard();
  let currentUserStats = scoreboard[index]

  scoreBoardName.innerText = 'Name: ' + currentUserStats.name;
  scoreBoardWordLength.innerText = 'Word length: ' + currentUserStats.wordLength;
  scoreBoardGuessedLetters.innerText = 'Guesses: ' + (currentUserStats.guessedLetters ? currentUserStats.guessedLetters.length : 0);
  scoreBoardTime.innerText = 'Time: ' + currentUserStats.time;
  scoreBoardDate.innerText = 'Date: ' + currentUserStats.date;
  scoreBoardWinState.innerText = currentUserStats.winState;

  container.appendChild(scoreBoardName)
  container.appendChild(scoreBoardWordLength)
  container.appendChild(scoreBoardGuessedLetters)
  container.appendChild(scoreBoardTime)
  container.appendChild(scoreBoardDate)
  container.appendChild(scoreBoardWinState)
  position.appendChild(container)
}

function populateScoreboard() {

  let list = loadScoreboard()

  list.forEach((scoreObject, index) => {

    infoToScoreBoard(index)
  })
}

export { populateScoreboard }


