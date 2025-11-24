const gameState = {
    currentWord: "",
    currentLetterArray: [],
    guessedLetters: new Set(),
    correctGuessCount: 0,
    mistakes: 0,
    maxMistakes: 6
};

function resetGameState() {
    gameState.currentWord = "";
    gameState.currentLetterArray = [];
    gameState.guessedLetters = new Set();
    gameState.mistakes = 0;
    gameState.correctGuessCount = 0;
}

function setWord(word) {
    gameState.currentWord = word;
    gameState.currentLetterArray = [...word];
}

// function addGuessedLetter(letter) {
//     gameState.guessedLetters.add(letter);
// }

// function addMistake() {
//     gameState.mistakes++;
// }

export { 
    gameState, 
    resetGameState, 
    setWord, 
    // addGuessedLetter, 
    // addMistake 
};