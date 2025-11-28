
//TODO: GÖR EN FUNKTION AV ALLT DETTA OCH STOPPA I displayUi.js
//sedan deleta denna filen

import { setUser } from '../storage-file/currentGameState.js';
import { hideAllOverlays } from '../display-file/overlayDecider.js'// import { populateScoreboard } from './scoreBoard.js';


const startButton = document.querySelector("#startButton");
const nameInput = document.querySelector("#nameInput");
const error = document.querySelector('#error');

                                                                    // const overlayNameDisplay = document.getElementById("overlayNameDisplay")

startButton.addEventListener('click', () => {
  const name = nameInput.value.trim();


  if (!name) {
    error.classList.remove('hidden') // error.hidden = false; //TODO: ANDREAS lägg till en timer.
    return;
  }

  
  setUser(name) //TODO: lägg till addEventListener med ENTER
  hideAllOverlays() // overlayNameDisplay.classList.toggle('hide');

  localStorage.setItem("namn", name); // populateScoreboard();

  
})


  









