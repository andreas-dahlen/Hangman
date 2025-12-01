const gameState = {
    currentWord: '',
    currentLetterArray: [],
    guessedLetters: new Set(),
    guessedWords: new Set(),
    guessIteration: 0,
    correctGuesses: 0,
    mistakes: 0,
    currentUser: '',
    winState: '',
    time: '',
    date: '',
    accuracy: '',
    score: '',
    maxMistakes: 6
}

function resetGameState() {
    gameState.currentWord = "";
    gameState.currentLetterArray = [];
    gameState.guessedLetters = new Set();
    gameState.guessedWords = new Set(),
    gameState.guessIteration = 0;
    gameState.correctGuesses = 0;
    gameState.mistakes = 0;
    gameState.currentUser = setUser(),
    gameState.winState = '',
    gameState.time = '',
    gameState.date = '',
    gameState.accuracy = '',
    gameState.score = ''
}

function setWord(word) {
    gameState.currentWord = word;
    gameState.currentLetterArray = [...word];
}

function setUser(name) {
    gameState.currentUser = name
}

function setWinState(state) {
    if (state === true) {
        gameState.winState = 'Win!'
    }
    else
        gameState.winState = 'lost!'
}

function setAccuracy() {
    const totalGuesses = gameState.correctGuesses + gameState.mistakes;
    const accuracyPercent = (gameState.correctGuesses / totalGuesses) * 100;
    gameState.accuracy = Math.round(accuracyPercent) + '%';
}

function setScore() {
    const baseScore = gameState.currentWord.length * 10;
    const penalty = gameState.mistakes * 5;
    gameState.score = Math.max(baseScore - penalty, 0);
}

function setTimeAndDate() {
    
    let now = new Date();
    let time = now.toLocaleTimeString();
    let date = now.toDateString();
    
    gameState.date = date;
    gameState.time = time;
}

export { 
    gameState, 
    resetGameState, 
    setWord, 
    setUser,
    setWinState,
    setTimeAndDate,
    setAccuracy,
    setScore,
}