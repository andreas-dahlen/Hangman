import { newGame } from '../main-file/load.js'; // Importerar 'newGame' //Den här ska bort
import { gameState } from '../storage-file/currentGameState.js';
import { showOverlay } from './overlayDecider.js';
 
function createEndOverlay(title) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay-end');
  
  const card = document.createElement('div');
  card.classList.add('overlay-card');

  const h2 = document.createElement('h2');
  h2.textContent = title;

  const pWord = document.createElement('p');
  pWord.textContent = `correct word: ${gameState.currentWord}`;

  const wrongGuessP = document.createElement('p')
  wrongGuessP.textContent = `wrong guesses: ${gameState.mistakes}`
  
    const accuracyP = document.createElement('p')
    accuracyP.textContent = `accuracy: ${gameState.accuracy}`
  
    const scoreP = document.createElement('p')
    scoreP.textContent = `score: ${gameState.score}`
  
  const btn = document.createElement('button');
  btn.textContent = 'New Game';
  btn.classList.add('button');

  //TODO: FLYTTA EVENT LISTENER
  btn.addEventListener('click', () => {
    overlay.remove();
    newGame();   // Startar om spelet
  });

  card.appendChild(h2);
  card.appendChild(pWord);
  card.appendChild(wrongGuessP);
  card.appendChild(accuracyP);
  card.appendChild(scoreP);
  card.appendChild(btn);
  overlay.appendChild(card);

  return overlay;
}


function showWinOverlay() {
  const pos = document.querySelector('.winner-dom')
  const overlay = createEndOverlay(`Congratulations! 🎉 ${gameState.currentUser} you won!`);
  pos.appendChild(overlay);
  showOverlay('winner')
}

function showLoseOverlay() {
  const pos = document.querySelector('.loser-dom')
  const overlay = createEndOverlay(`You Lost 😢 Better luck next time ${gameState.currentUser}`);
  pos.appendChild(overlay);
  showOverlay('loser')
}




function showScoreBoard() {
    leaderboard.sort((a, b) => {
        // 1. Sort by score (higher is better)
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        // 2. Tie-break by accuracy
        return b.accuracy - a.accuracy;
    });
}

export {showWinOverlay, showLoseOverlay}; // La till de nya funktionerna