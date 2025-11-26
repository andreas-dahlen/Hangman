import './overlayName.js';

// import {whatIsYourName} from './overlayName.js'
//TODO: använd funktionen ovan och omvandla overlayName till en funktion.
//TODO: stoppa in funktionen i overlayUi.js istället


import { newGame, loadEventListeners } from './load.js';
import { guessController } from '../game-logic-file/guessMain.js';

loadEventListeners()
newGame()
guessController()
//när användaren har skapats.



