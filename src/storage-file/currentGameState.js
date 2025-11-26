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
    gameState.correctGuessCount = 0; //rename this to ittiration counter
    gameState.howManyTimesYouAtuallyGuessedCorrectly = 0; //self explanitory

    //TODO: both of these need to be in gameState and stuff...

    //TODO: accuracy (currectguess / total guesses) * 100

    gameState.mistakes = 0;
    gameState.maxMistakes = 6;
    gameState.currentUser = setUser();
    gameState.winState = ''
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
//     winState: gameState.winState,
//     date: Date.now()
// };


function setWord(word) {
    gameState.currentWord = word;
    gameState.currentLetterArray = [...word];
}

function setUser(name) {
    gameState.currentUser = name
}

function winState(state) {
    if (state)
    gameState.winState = 'Win!'
    else
        gameState.winState = 'You lost!'
}

//TODO: function accuracy

//TODO: function score



//adds time into gameState.time
//adds date into gameState.date
function timeAndDate() {
    
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
    winState,
    timeAndDate
};