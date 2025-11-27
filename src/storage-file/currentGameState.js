const gameState = {
    currentWord: '',
    currentLetterArray: [],
    guessedLetters: new Set(),
    guessedWords: new Set(),
    guessIteration: 0,
    correctGuesses: 0,
    mistakes: 0,
    maxMistakes: 6,
    currentUser: '',
    winState: '', //samma som när användaren ser result:
    time: '',
    date: '',
    accuracy: '',
    score: ''
};

function resetGameState() {
    gameState.currentWord = "";
    gameState.currentLetterArray = [];
    gameState.guessedLetters = new Set();
    gameState.guessedWords = new Set(),
    gameState.guessIteration = 0;
    gameState.correctGuesses = 0;
    gameState.mistakes = 0;
    // maxMistakes = 6; //om det finns tid för difficulty så anropar denna en funktion som hanterar det.
    gameState.currentUser = setUser(),
    gameState.winState = '',
    gameState.time = '',
    gameState.date = '',
    gameState.accuracy = '',
    gameState.score = ''

    //TODO: both of these need to be in gameState and stuff...

    //TODO: accuracy (currectguess / total guesses) * 100

}

//MAKE TODO: currentWord, 
// currentLetterArray, 
// guessedLetters, 
// guessedWords, 
// ittirationCounter, 
// correctGuesses, 
// mistakes, 
// maxMistakes, 
// currentUser, 
// winState, 
// accuracy, (this needs an extra step of calculation total guesses inside of its function)
//score,
//time,
// date


//CHATGPT EXAMPLE:
// const result = {
//     user: gameState.currentUser,
//     word: gameState.currentWord,
//     wordLength: gameState.currentWord.length,
//     mistakes: gameState.mistakes,
//     correct: gameState.howManyTimesYouAtuallyGuessedCorrectly,
//     totalGuesses: gameState.howManyTimesYouAtuallyGuessedCorrectly + gameState.mistakes,
//     accuracy: (gameState.howManyTimesYouAtuallyGuessedCorrectly /
//               (gameState.howManyTimesYouAtuallyGuessedCorrectly + gameState.mistakes)) * 100,
//     score: (gameState.currentWord.length * 10) - (gameState.mistakes * 5),
//     setWinState: gameState.winState,
//     date: Date.now()
// };


function setWord(word) {
    gameState.currentWord = word;
    gameState.currentLetterArray = [...word];
}

function setUser(name) {
    gameState.currentUser = name
}

function setWinState(state) {
    if (state)
    gameState.winState = 'Win!'
    else
        gameState.winState = 'You lost!'
}

//TODO: function accuracy

//TODO: function score



//adds time into gameState.time
//adds date into gameState.date
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
    setTimeAndDate
};