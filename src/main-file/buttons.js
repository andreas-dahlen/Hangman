import { showOverlay, hideAllOverlays } from '../display-file/overlayDecider.js'

function scoreBoardButton() {
    
    const toggleScoreboard = document.querySelector(".score-board-button");

toggleScoreboard.addEventListener('click', () => {
    showOverlay('scoreboard')
})
}

function startNewGameButton() {

    const toggleStartNewGame = document.querySelector(".new-game-button");

    toggleStartNewGame.addEventListener('click', () => { 

        hideAllOverlays()
    })

}

export {startNewGameButton, scoreBoardButton}