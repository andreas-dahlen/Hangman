import { showOverlay, hideAllOverlays } from '../display-file/overlayDecider.js'
import { populateScoreboard } from '../storage-file/scoreBoardDomCreator.js';
import { setUser, gameState } from '../storage-file/currentGameState.js';
import { newGame } from './load.js';

function scoreBoardButton() {
  const openScoreButton = document.querySelectorAll(".score-board-button");

  openScoreButton.forEach(button => {
    button.addEventListener('click', () => {
      showOverlay('scoreboard');
      populateScoreboard('guesses');
    });
  });

  const sortGuessesButton = document.querySelector('.sort-by-guesses');
  const sortTimeButton = document.querySelector('.sort-by-time-date');

  sortGuessesButton.addEventListener('click', () => {
    toggleButton(sortGuessesButton, sortTimeButton)
    populateScoreboard('guesses');
  });

  sortTimeButton.addEventListener('click', () => {
    toggleButton(sortTimeButton, sortGuessesButton)
    populateScoreboard('date');
  });
  hideOverlaysButton()
}

function toggleButton(selected, unselected) {
  selected.classList.add('selected')
  selected.classList.remove('not-selected')

  unselected.classList.add('not-selected')
  unselected.classList.remove('selected')
}

function hideOverlaysButton() {
  const toggleHideOverlays = document.querySelectorAll(".hide-overlays-button");
  toggleHideOverlays.forEach(btn => {
    btn.addEventListener('click', () => {
      if (gameState.mistakes >= gameState.maxMistakes || gameState.guessIteration >= gameState.currentWord.length) {
        const saveName = gameState.currentUser
        newGame()
        gameState.currentUser = saveName
        return
      } else {
        hideAllOverlays()
      }
    });
  });
}

function handleNameInput() {
  const startButton = document.querySelector("#startButton");
  const nameInput = document.querySelector("#nameInput");
  const error = document.querySelector('#error');

  startButton.addEventListener('click', () => {
    const name = nameInput.value.trim();

    if (!name) {
      error.classList.remove('hidden')
      clearTimeout(window._errorTimeout)
      window._errorTimeout = setTimeout(() => {
        error.classList.add('hidden')
      }, 4000)
      return;
    }

    setUser(name)
    hideAllOverlays()
    scoreBoardButton()
  });

  nameInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
      startButton.click();
    }
  });
}

function restart() {
  const restartButtons = document.querySelectorAll('.restart-button');
  restartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      newGame();
    });
  });
}

function loadEventListeners(type) {
  switch (type) {
    case 'scoreboardbutton':
      scoreBoardButton()
      break;
    case 'hideoverlays':
      hideOverlaysButton()
      break;
    case 'startbutton':
      handleNameInput()
      break;
    case 'restartbutton':
      restart()
      break;
    default:
      console.warn(`Event listener typ error: ${type}`)
  }
}

export { loadEventListeners };

