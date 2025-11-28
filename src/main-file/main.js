import {handleNameInput} from './overlayName.js' 
import { newGame, loadEventListeners } from './load.js';
import { guessController } from '../game-logic-file/guessMain.js';

handleNameInput();                                                        //1. Kör handelNaeImput när man trycker på startButton
loadEventListeners();                                                     //2. kör funktionen dom lägger till eventlisteners i spelet: 1. öppnar scoreboard 2. startar nytt spel(gömmer overlay)
newGame();                                                                //3. startar spelet från början (den: resettar game stat, hämtar slumpmässigt ord från listan, skapar bokstäver i IU med_ och gömda bokstäver, sätter tid och datum för spelet, visar overlay)
guessController();                                                         //4. hanterar spelest gissningar (lyssnar efter tangent/knapptryckningar, kollar om bokstaven finns i ordet, uppdaterar rätt bokstav på rätt plats, uppdaterar gamestate med gissningar, win/lose, tid)





