import { newGame } from './load.js';
import { guessController } from '../game-logic-file/guessMain.js';

newGame();
//3. startar spelet från början (den: resettar game state, hämtar slumpmässigt ord från listan, skapar bokstäver i IU med_ och gömda bokstäver, sätter tid och datum för spelet, visar overlay)

guessController();
//4. hanterar spelest gissningar (lyssnar efter tangent/knapptryckningar, kollar om bokstaven finns i ordet, uppdaterar rätt bokstav på rätt plats, uppdaterar gamestate med gissningar, win/lose, tid)





