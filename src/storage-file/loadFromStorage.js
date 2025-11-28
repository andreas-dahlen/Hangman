function loadScoreboard(sortBy = 'guesses') {                                                             

  let scorboard = JSON.parse(localStorage.getItem('scoreboard'))                          //1. hämtaren sträng (null om key saknas) JSON pars omvandlar strängen till objekt/array

  if (scorboard === null) {                                                                //2. om scoreboard returnerar null så returnerar funktionen en tom array/lista
    return []; 
  } else { 
    scorboard.sort((a, b) => (a.guessedLetters?.length || 0) - (b.guessedLetters?.length || 0));      //3. scoreboard är en array som sorteras på plats efter längden på guess letters (optional chaining) om guessedLetters saknas blir värdet undefined (0). poster med färre gissningar hamnar först.
    return scorboard;                                                                                
  }

}

export { loadScoreboard }                                                           //4.returnerar den sorterade arrayen


