
import { setUser } from '../storage-file/currentGameState.js';
import { populateScoreboard } from './scoreBoard.js';
const startButton = document.getElementById("startButton");
// const overlayName = document.getElementById("overlay-name") // vad gör denna?

const nameInput = document.getElementById("nameInput");
const error = document.getElementById("error");

const overlayNameDisplay = document.getElementById("overlayNameDisplay")



startButton.addEventListener('click', () => {
 
  const name = nameInput.value.trim();


  if (!name) {
    error.hidden = false;
    return;
  }

  //TODO: lägg till addEventListener med ENTER
  setUser(name)
  overlayNameDisplay.classList.toggle('hide');
  localStorage.setItem("namn", name); 
  populateScoreboard();

  
})


  









