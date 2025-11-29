import { setUser } from '../storage-file/currentGameState.js';
import { hideAllOverlays } from '../display-file/overlayDecider.js'// import { populateScoreboard } from './scoreBoard.js';
import { createScoreboardEventListeners } from './buttons.js';//importerat funkrionen


function handleNameInput() {
  const startButton = document.querySelector("#startButton");// knappen som startar spelet
  const nameInput = document.querySelector("#nameInput"); //textfältet som spelaren skriver in sitt namn
  const error = document.querySelector('#error');//inget namn så visas felmeddelande

  startButton.addEventListener('click', () => {           //1. lägger till en eventlistener på knappen startButton. Varje klick kör koden i den anonyma funktionen.
    const name = nameInput.value.trim();                  //2. hämtar text från name imput. Tar bort mellanslag i början och slutet av texten.

    if (!name) {                                          //3. om spelaren inte skrivit något namn visas ett felmeddelande genom att ta bort hidden.
      error.classList.remove('hidden')                     
      return;                                             //4. return stoppar koden så den inte fortsätter köras.
    }

    setUser(name)                                         //5. sparar spelarens namn i gameState.currentUser. Spelet vet vem som spelar
    hideAllOverlays()                                     //6. gör att overlayen försvinner så man kan börja spela
    createScoreboardEventListeners();                     //7. kör funktionen som lägger till eventListeners till scorborden (knapp för att öppna scoreboard, knapp för att sortera gissningar/tid datum.)
  });
}

export {handleNameInput};                                  //8. exporterar handleNameInput till main.js där den körs när man trycker på startbutton

//TODO: ANDREAS lägg till en timer.















