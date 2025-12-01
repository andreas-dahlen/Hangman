function loadScoreboard() {

  let scorboard = JSON.parse(localStorage.getItem('scoreboard'))

  if (scorboard === null) {
    return [];
  } else {
    scorboard.sort((a, b) => (a.guessedLetters?.length || 0) - (b.guessedLetters?.length || 0));
    return scorboard;
  }
}

export { loadScoreboard }

