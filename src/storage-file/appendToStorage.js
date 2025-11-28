
import { gameState } from "../storage-file/currentGameState.js";              //1. importerar aktuell spelinformation (användare, ord, gissade, bokstäver, tid och datum)
import { loadScoreboard } from "./loadFromStorage.js";                        //2. hämtar scorebordet från localStorage ochlämnar tillbaka det som en array

function storeScoreboard() {                                                  //3. funktionen samlar och lägger informationen i localStorage + max 10 spelare
  let playerResult = {                                                        //4. objekt med alla resultaten för en enslid spelare
    name: gameState.currentUser,                                               
    wordLength: gameState.currentWord.length,
    guessedLetters: Array.from(gameState.guessedLetters),
    time: gameState.time,
    date: gameState.date,
    winState: gameState.winState

    
  };
  
  const existing = loadScoreboard()                                            //5. skapar en konst som innehåller alla tidigare resultat. 
  existing.push(playerResult);                                                 //6. push lägger till det nya resultatet längst bak i listan
  
  existing.sort((a, b) => (a.guessedLetters.length || 0) - (b.guessedLetters.length || 0));   //7. lägre antal gissningar betyder bättre resultat så de hamnar överst
  const top10 = existing.slice(0, 10);                                        //8. laddar top 10 gissningsresultat inte fler
  localStorage.setItem('scoreboard', JSON.stringify(top10));                  //9. sprara top 10 tillbaka i localStorage under key:'scoreboard'. JSON gör objekten till en sträng så den kan sparas i localStorage
}

export { storeScoreboard }                                                      //10. exporterar storeScoreboard till guessProcessing.js