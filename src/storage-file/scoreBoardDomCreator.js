import { loadScoreboard } from './loadFromStorage.js';

const scorboardDom = document.querySelector('.scoreboard-dom')

function infoToScoreBoard(currentUserStats) {

  const container = document.createElement('div')
  container.classList.add('scoreboard-players')  //TODO: skulle kunna lägga på klasser på olika element..?//TODO: behöver score, accurecy, mistakes!!

  const scoreBoardName = document.createElement('h3')
  const scoreBoardWordLength = document.createElement('p')
  const scoreBoardGuessedLetters = document.createElement('p')
  const scoreBoardTime = document.createElement('p')
  const scoreBoardDate = document.createElement('p')
  const scoreBoardWinState = document.createElement('p')
  const scoreBoardAccuracy = document.createElement('p')
  const scoreBoardScore = document.createElement('p')

  scoreBoardName.innerText = 'Name: ' + currentUserStats.name;
  scoreBoardWordLength.innerText = 'Word length: ' + currentUserStats.wordLength;
  scoreBoardGuessedLetters.innerText = 'Guesses: ' + (currentUserStats.guessedLetters ? currentUserStats.guessedLetters.length : 0);
  scoreBoardTime.innerText = 'Time: ' + currentUserStats.time;
  scoreBoardDate.innerText = 'Date: ' + currentUserStats.date;
  scoreBoardWinState.innerText = 'Result: ' + currentUserStats.winState;
  scoreBoardAccuracy.innerText = 'Accuracy: ' + currentUserStats.accuracy
  scoreBoardScore.innerText = 'Score: ' + currentUserStats.score

  container.appendChild(scoreBoardName);
  container.appendChild(scoreBoardWordLength);
  container.appendChild(scoreBoardGuessedLetters);
  container.appendChild(scoreBoardTime);
  container.appendChild(scoreBoardDate);
  container.appendChild(scoreBoardWinState);
  container.appendChild(scoreBoardAccuracy)
  container.appendChild(scoreBoardScore)
  

  scorboardDom.appendChild(container); 
}

function compare(a, b) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  if (dateA < dateB) return -1;
  if (dateA > dateB) return 1;

  return b.time.localeCompare(a.time); //EN FULGREJ men det får det att fungera utan att behöva ändra haöva koden!!//behandlar tiden som strängar och sorterar den i bokstavsordning//tar hänsyn till åäö//fungerar brar för att formatet på tiden är konsekvent
}

function populateScoreboard(sortBy = 'guesses') { 

  scorboardDom.innerHTML = '';
  let list = loadScoreboard(sortBy);

  if (sortBy === 'date') {
    list.sort(compare);                                  

  }

  list.forEach(entry => {     

    infoToScoreBoard(entry)
  });
}

export { populateScoreboard };


