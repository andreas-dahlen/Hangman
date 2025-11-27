function loadScoreboard() {
  //TODO: try catch

  let scorboard = JSON.parse(localStorage.getItem('scoreboard'))

  if (scorboard === null) {
    return []; //returnerar en tom lista
  } else { 
    return scorboard; 
  }

}

export { loadScoreboard } //den exproterar funktionen så andra kan importera den