
import { setUser } from '../storage-file/currentGameState.js';
import { populateScoreboard } from './scoreBoard.js';
const startButton = document.getElementById("startButton");
// const overlayName = document.getElementById("overlay-name") // vad gör denna?
//ANDREAS: overlay-name är ett ID som finns inuti ett div element med klassen overlay-backdrop. Vet inte om du använder den? annars är det ett värdelöst div element.

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

  //TODO: {från: andreas} tänker att alla localStorage funktioner bör vara i appendToStorage filen. Skulle kunna "appendas" när man vinner eller förlorar i guessProcessing
  //Det vill säga: Anropa funktionen när man vinner eller förlorar i guessprocessing > appendToStorage > storage
 //Detsamma med populateScoreboard...?
 //Tycker inte vi behöver en win/lose fil... dock skulle man kunna skapa en funktion som hanterar alla funktions anrop när man vinner/förlorar
  localStorage.setItem("namn", name); 
  populateScoreboard();

  
})


  









