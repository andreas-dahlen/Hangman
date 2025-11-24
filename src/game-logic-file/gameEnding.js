function loseGame() {
    showLose(gameState.currentWord)
    console.log('you lost')
}


function winGame() {
    showWin(gameState.currentWord);
    console.log('you won')
}

export {
    loseGame, winGame,
}