import { showOverlay, hideAllOverlays } from '../display-file/overlayDecider.js'        //1. visar en overlay, döljer alla overlays när man vill gå tillbaka till spelvyn
import { populateScoreboard } from "../storage-file/scoreBoardDomCreator.js";          //2. bygger och uppdaterar scoreboard-DOM med info från localStorage 
import { setUser } from '../storage-file/currentGameState.js';
import { newGame } from './load.js';

//scorebordbutten i headern
function scoreBoardButton() {

    const openScoreButton = document.querySelectorAll(".score-board-button");
    //3. hämtar element i DOM som ska öppna scoreBoarden (knapp finns i headern)

    openScoreButton.forEach(button => {
    //4. på elementet beskrivet i 3.läggs en click-event listener  
        button.addEventListener('click', () => {
            //5. när den klickas visas scoreBoard-overlay
            showOverlay('scoreboard');
            //6. och fyller overlayen med 10 toplista med info sorterat efter gissningar
            populateScoreboard('guesses');
        });
    });

    const sortGuessesButton = document.querySelector('.sort-by-guesses');
    const sortTimeButton = document.querySelector('.sort-by-time-date');

    sortGuessesButton.addEventListener('click', () => {
        //10. varje knapp har en click-listener som fyller sorterad info till scoreBoarden

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

//starta nytt spel knapp
function hideOverlaysButton() {

    const toggleHideOverlays = document.querySelectorAll(".hide-overlays-button");
//7. hämtar knappen hide-overlays-button, 
toggleHideOverlays.forEach(btn => {
  btn.addEventListener('click', () => {
    hideAllOverlays();
    //8.anropar hideAllOverlays för att stänga overlay
  });
});
}


function handleNameInput() {
  const startButton = document.querySelector("#startButton");
  // knappen som startar spelet
  const nameInput = document.querySelector("#nameInput"); 
  //textfältet som spelaren skriver in sitt namn
  const error = document.querySelector('#error');
  //inget namn så visas felmeddelande

  startButton.addEventListener('click', () => {
    //1. lägger till en eventlistener på knappen startButton. Varje klick kör koden i den anonyma funktionen.
    const name = nameInput.value.trim();
    //2. hämtar text från name imput. Tar bort mellanslag i början och slutet av texten.

    if (!name) {
      //3. om spelaren inte skrivit något namn visas ett felmeddelande genom att ta bort hidden.
      error.classList.remove('hidden')  
      
      clearTimeout(window._errorTimeout)

      window._errorTimeout = setTimeout(() => {
        error.classList.add('hidden')
      }, 4000)
      return;
      //4. return stoppar koden så den inte fortsätter köras.
    }

    setUser(name)
    //5. sparar spelarens namn i gameState.currentUser. Spelet vet vem som spelar
    hideAllOverlays()
    //6. gör att overlayen försvinner så man kan börja spela
    scoreBoardButton()
    //7. kör funktionen som lägger till eventListeners till scorborden (knapp för att öppna scoreboard, knapp för att sortera gissningar/tid datum.)
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
    switch(type) {
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

