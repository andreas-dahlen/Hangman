import { showOverlay, hideAllOverlays } from '../display-file/overlayDecider.js'        //1. visar en overlay, döljer alla overlays när man vill gå tillbaka till spelvyn
import { populateScoreboard } from "../storage-file/scoreBoardDomCreator.js";          //2. bygger och uppdaterar scoreboard-DOM med info från localStorage 

//scorebordbutten i headern
function scoreBoardButton() {

    const openScoreButton = document.querySelector(".score-board-button");              //3. hämtar element i DOM som ska öppna scoreBoarden (knapp finns i headern)

    openScoreButton.addEventListener('click', () => {                                   //4. på elementet beskrivet i 3.läggs en click-event listener
        showOverlay('scoreboard');                                                      //5. när den klickas visas scoreBoard-overlay
        populateScoreboard('guesses');                                                  //6. och fyller overlayen med 10 toplista med info sorterat efter gissningar
    });
}

//starta nytt spel knapp
function startNewGameButton() {                                                           

    const toggleStartNewGame = document.querySelector(".new-game-button");              //7. hämtar knappen new-game-button, 

    toggleStartNewGame.addEventListener('click', () => {                                 //8.anropar hideAllOverlays för att stänga overlay

        hideAllOverlays();
    })
}

//sorteringsknappar för scoreboard
function createScoreboardEventListeners() {                                             //9. hämtar tre element (gissnngar, sortera efter tid/datum och stäng-knappen)

    const sortGuessesButton = document.querySelector('.sort-by-guesses');
    const sortTimeButton = document.querySelector('.sort-by-time-date');
    const closeScoreboardButton = document.querySelector('.close-scoreboard');

    sortGuessesButton.addEventListener('click', () => {                                    //10. varje knapp har en click-listener som fyller sorterad info till scoreBoarden
        populateScoreboard('guesses');
    });

    sortTimeButton.addEventListener('click', () => {
        populateScoreboard('date');
    });

    closeScoreboardButton.addEventListener('click', () => {
        hideAllOverlays(); //NY
    });

}
export { startNewGameButton, createScoreboardEventListeners, scoreBoardButton, };

