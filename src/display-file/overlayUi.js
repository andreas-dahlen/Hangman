import { gameState } from '../storage-file/currentGameState.js';
import { showOverlay } from './overlayDecider.js';
import {loadEventListeners } from '../main-file/buttons.js'
 
function createEndOverlay(title) {
  const card = document.createElement('div');
  card.classList.add('overlay-card', 'overlay-end');

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
  btn.classList.add('button', 'restart-button');


  card.appendChild(h2);
  card.appendChild(pWord);
  card.appendChild(wrongGuessP);
  card.appendChild(accuracyP);
  card.appendChild(scoreP);
  card.appendChild(btn);
  // overlay.appendChild(card);

  return card;
}


function showWinOverlay() {
  const pos = document.querySelector('.winner-dom')
  const card = createEndOverlay(`Congratulations! 🎉 ${gameState.currentUser} you won!`);
  pos.appendChild(card);
  showOverlay('winner')
  loadEventListeners('restartbutton')
}

function showLoseOverlay() {
  const pos = document.querySelector('.loser-dom')
  const card = createEndOverlay(`You Lost 😢 Better luck next time ${gameState.currentUser}`);
  pos.appendChild(card);
  showOverlay('loser')
  loadEventListeners('restartbutton')
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