function loadScoreboard() {

  let scorboard = JSON.parse(localStorage.getItem('scoreboard'))

  if (scorboard === null) {
    return []; //returnerar en tom lista
  } else { 
    scorboard.sort((a, b) => (a.guessedLetters?.length || 0) - (b.guessedLetters?.length || 0));
    return scorboard; 
  }

}

export { loadScoreboard } //den exproterar funktionen så andra kan importera den

//1. sortera listan på högsta poäng
