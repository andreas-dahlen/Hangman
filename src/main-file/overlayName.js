const startButton = document.getElementById("startButton");
const nameInput = document.getElementById("nameInput");
const error = document.getElementById("error");


startButton.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (!name) {
    error.hidden = false;
    return;
  }

  // Spara namnet
  localStorage.setItem("namn", name);             //exportera namnet från local storage till scorBoard.js

  // Skicka till spelet
  // window.location.href = "game.html"; //ändrar namnet på filken
  // ändra synligheten på element 
});

// använda dessa för hidden:
// function on() {
//   document.getElementById("overlay").style.display = "block";
// }

// function off() {
//   document.getElementById("overlay").style.display = "none";
// }

