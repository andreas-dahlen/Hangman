export function populateScoreboard() {

  const nameEl = document.getElementById("scoreBoardName");
  const guessesEl = document.getElementById("scoreBoard-guesses");
  const wordLengthEl = document.getElementById("scoreBoard-word-lengt");
  const dateEl = document.getElementById("scoreBoard-date");
  const statusEl = document.getElementById("scoreBoard-status");

  const nameFromStorage = localStorage.getItem("namn");

  
  const scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) || [];        // Hämta tidigare sparade resultat


  if (scoreBoard.length > 0) {                                                    // Om det finns resultat

    const latestScore = scoreBoard[scoreBoard.length - 1];

    nameEl.innerText = "Name: " + latestScore.name;
    guessesEl.innerText = "Guesses: " + latestScore.guesses;
    wordLengthEl.innerText = "Word length: " + latestScore.wordLength;
    dateEl.innerText = "Date: " + latestScore.date;
    statusEl.innerText = "Status: " + latestScore.status;
  }
  else {
    nameEl.innerText = "Name: " + (nameFromStorage || "no name found");
    guessesEl.innerText = "Guesses: -";
    wordLengthEl.innerText = "Word length: -";
    dateEl.innerText = "Date: -";
    statusEl.innerText = "Status: -";
  }
}

//kalla på funktionen när spelet är slut.. VAR??
// import { populateScoreboard } from "../scoreBoard-file/scoreBoard.js";

// function winGameResult() {
//   saveScore();
//   populateScoreboard();
// }

// function loseGameResult() {
//   saveScore();
//   populateScoreboard();
// }


// TODO: gör en lop för att kunna skapa en lista!!