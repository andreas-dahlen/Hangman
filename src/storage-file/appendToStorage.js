
import { gameState } from "../storage-file/currentGameState.js";
import { loadScoreboard } from "./loadFromStorage.js";

function storeScoreboard() { //funktionen samlar och lägger informationen i localStorage
  let playerResult = {
    name: gameState.currentUser,
    wordLength: gameState.currentWord.length,
    time: gameState.time,
    date: gameState.date,
    winState: gameState.winState
  };

  const existing = loadScoreboard()

  existing.push(playerResult);

  localStorage.setItem('scoreboard', JSON.stringify(existing));
}

export { storeScoreboard }

//TODO: FUNCTION LEADERBOARD
// gameState.currentUser
// time and date
// gameState.winState
//mistakes
// gameState.currentWord.length
//accuracy
//score
//guesses



