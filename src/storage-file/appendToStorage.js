
import { gameState } from "../storage-file/currentGameState.js";
import { loadScoreboard } from "./loadFromStorage.js";

function storeScoreboard() {
  let playerResult = {
    name: gameState.currentUser,
    wordLength: gameState.currentWord.length,
    guessedLetters: Array.from(gameState.guessedLetters),
    time: gameState.time,
    date: gameState.date,
    winState: gameState.winState,
    accuracy: gameState.accuracy,
    score: gameState.score
  }

  const existing = loadScoreboard()
  existing.push(playerResult);

  existing.sort((a, b) =>
    (a.guessedLetters?.length || 0) - (b.guessedLetters?.length || 0)
  )

  const top10 = existing.slice(0, 10);
  localStorage.setItem('scoreboard', JSON.stringify(top10));
}

export { storeScoreboard }