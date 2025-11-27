//hämtar data från storage. använder datan för att skapa dom element med hjälp av infoToScoreboard() en forEach loop.

 //parse

 function loadGameState() { 

  return JSON.parse(localStorage.getItem('scoreStat')); // hämtar localStorage, nvänder pars för att ta bort stringafy och lämnar den till den som anropar. 

 }

 export { loadGameState } //den exproterar funktionen så andra kan importera den