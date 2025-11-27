
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

  // const points = [];  //listobjekt som inte innehåller några element (för att kunna anropa tpm lista utan att få error/null)
  // points.sort(function(a, b){return a - b});

  const existing = loadScoreboard() //laddar befintlig scorboard från localStorage

  existing.push(playerResult); //existing är arrayet // push (är en funktion) lägger till på arrayet // lägger till i arreyet på slutet// playerResult är den nya informationen som just satts ihop

  localStorage.setItem('scoreboard', JSON.stringify(existing));
}

export { storeScoreboard }

//1. sortera listan
//2. 11:e resultatet knuffar undan det sämsta resultatet

//TODO: FUNCTION LEADERBOARD
// gameState.currentUser
// time and date
// gameState.winState
//mistakes
// gameState.currentWord.length
//accuracy
//score
//guesses



