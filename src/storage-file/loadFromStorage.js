function loadScoreboard() { 
  //TODO: try catch
  return JSON.parse(localStorage.getItem('scoreboard')); // hämtar localStorage, nvänder pars för att ta bort stringafy och lämnar den till den som anropar. 

 }

 export { loadScoreboard } //den exproterar funktionen så andra kan importera den