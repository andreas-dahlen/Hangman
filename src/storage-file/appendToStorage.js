
import { gameState } from "../storage-file/currentGameState.js";

function storeGameState() { //funktionen samlar och lägger informationen i localStorage
  let playerResult = {
    name: gameState.currentUser,
    wordLength: gameState.currentWord.length,
    time: gameState.time,
    date: gameState.date,
    status: gameState.winState
  };

  localStorage.setItem('scoreStat', JSON.stringify(playerResult))
  

}

export { storeGameState }

//TODO: FUNCTION LEADERBOARD
// gameState.currentUser
// time and date
// gameState.winState
//mistakes
// gameState.currentWord.length
//accuracy
//score
//guesses



