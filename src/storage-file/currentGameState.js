const gameState = {
    currentWord: '',
    currentLetterArray: [],
    guessedLetters: new Set(),
    guessedWords: new Set(),
    correctGuessCount: 0,
    mistakes: 0,
    maxMistakes: 6,
    currentUser: '',
    winState: '',

    //TODO: could have a variable in the end if you won or lost
};

function resetGameState() {
    gameState.currentWord = "";
    gameState.currentLetterArray = [];
    gameState.guessedLetters = new Set();
    gameState.guessedWords = new Set(),
    gameState.correctGuessCount = 0;
    gameState.mistakes = 0;
    gameState.maxMistakes = 6;
    gameState.currentUser = setUser();
    gameState.winState = ''
}

function setWord(word) {
    gameState.currentWord = word;
    gameState.currentLetterArray = [...word];
}

function setUser(name) {
    gameState.currentUser = name
}

function winState(state) {
    if (state)
    gameState.winState = 'win'
    else
        gameState.winState = 'lost'
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
    setUser,
    winState
};