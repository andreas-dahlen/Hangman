
import { gameState } from "../storage-file/currentGameState.js";
import { loadScoreboard } from "./loadFromStorage.js";

function storeScoreboard() { //funktionen samlar och lägger informationen i localStorage
  let playerResult = {
    name: gameState.currentUser,
    wordLength: gameState.currentWord.length,
    guessedLetters: Array.from(gameState.guessedLetters),
    time: gameState.time,
    date: gameState.date,
    winState: gameState.winState
  };
  // const points = [];  //listobjekt som inte innehåller några element (för att kunna anropa tpm lista utan att få error/null)
  // points.sort(function(a, b){return a - b});

  const existing = loadScoreboard() //laddar befintlig scorboard från localStorage

  existing.push(playerResult); //existing är arrayet // push (är en funktion) lägger till på arrayet // lägger till i arreyet på slutet// playerResult är den nya informationen som just satts ihop
  existing.sort((a, b) => (a.guessedLetters.length || 0) - (b.guessedLetters.length || 0));
  const top10 = existing.slice(0, 10); //laddar top 10 gissningsresultat, 10 omgångarna med lägst antal gissningar (står i uppgiften)
  localStorage.setItem('scoreboard', JSON.stringify(top10));
}

export { storeScoreboard }





