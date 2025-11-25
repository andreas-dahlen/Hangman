
import { infoToScoreBoard } from "../main-file/scoreBoard.js";

function loseGame() {
    // showLose(gameState.currentWord) TODO: bortkommenterade då den inte är implementerats än. Ta bort denna kommentar när det är gjort!
    console.log('you lost')
    infoToScoreBoard(false);
}


function winGame() {
    // showWin(gameState.currentWord); TODO: bortkommenterade då den inte är implementerats än. Ta bort denna kommentar när det är gjort!
    console.log('you won')
    infoToScoreBoard(true);
}

export {
    loseGame, winGame,
}

