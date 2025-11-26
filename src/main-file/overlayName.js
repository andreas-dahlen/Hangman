
//TODO: GÖR EN FUNKTION AV ALLT DETTA OCH STOPPA I displayUi.js
//sedan deleta denna filen

import { setUser } from '../storage-file/currentGameState.js';
import { hideAllOverlays } from '../display-file/overlayDecider.js'
// import { populateScoreboard } from './scoreBoard.js';

//TODO: använd querySelector('# för id')

const startButton = document.getElementById("startButton");
const nameInput = document.getElementById("nameInput");
const error = document.getElementById("error");

// const overlayNameDisplay = document.getElementById("overlayNameDisplay")

startButton.addEventListener('click', () => {
 
  const name = nameInput.value.trim();


  if (!name) {
    error.hidden = false;
    return;
  }

  //TODO: lägg till addEventListener med ENTER
  setUser(name)
  hideAllOverlays()
  // overlayNameDisplay.classList.toggle('hide');

  //TODO: {från: andreas} tänker att alla localStorage funktioner bör vara i appendToStorage filen. Skulle kunna "appendas" när man vinner eller förlorar i guessProcessing
  //Det vill säga: Anropa funktionen när man vinner eller förlorar i guessprocessing > appendToStorage > storage
 //Detsamma med populateScoreboard...?
 //Tycker inte vi behöver en win/lose fil... dock skulle man kunna skapa en funktion som hanterar alla funktions anrop när man vinner/förlorar
  localStorage.setItem("namn", name); 
  // populateScoreboard();

  
})


  









