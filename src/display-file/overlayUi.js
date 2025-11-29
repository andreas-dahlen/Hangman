import { newGame } from '../main-file/load.js'; // Importerar 'newGame'
 
 
 function updateWin() {
    //?
    console.log('updateLose!')
}

function updateLose() {
    //?
    console.log('updateLose!')
}      


function createEndOverlay(title, message) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay-end');
  
  const card = document.createElement('div');
  card.classList.add('overlay-card');

  const h1 = document.createElement('h1');
  h1.textContent = title;

  const p = document.createElement('p');
  p.textContent = message;

  const btn = document.createElement('button');
  btn.textContent = 'New Game';
  btn.classList.add('newgame-btn');

  btn.addEventListener('click', () => {
    overlay.remove();
    newGame();   // Startar om spelet
  });

  card.appendChild(h1);
  card.appendChild(p);
  card.appendChild(btn);
  overlay.appendChild(card);

  return overlay;
}


function showWinOverlay(playerName) {
  const overlay = createEndOverlay('You Win! 🎉', `${playerName} klarade ordet!`);
  document.body.appendChild(overlay);
}

function showLoseOverlay(correctWord) {
  const overlay = createEndOverlay('You Lost 😢', `Rätt ord var: ${correctWord}`);
  document.body.appendChild(overlay);
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

export {updateLose, updateWin, showWinOverlay, showLoseOverlay}; // La till de nya funktionerna