export function populateScoreboard() {

  const nameElement = document.getElementById("scoreBoardName"); 

  console.log('current player: ', window.localStorage.getItem('namn'));

  let nameFromStorage =  window.localStorage.getItem('namn');

  //window = går till förnstret för att se,localStorage = peckar på vårt localStorage
  //getItem = hämta item, ('namn') = nyckeln/key (som vi får via en sträng)
  //JASON parse = Jason för att se datan korrekt , parce = konfigurerar en existerande strän till en  datastruktur
  
  if (nameFromStorage) {
    nameElement.innerText ='Name:' + nameFromStorage;

  }

  else {
    nameElement.innerText = 'Name: ' + 'no name found';
    nameElement.className = 'scoreBoard-name errorName';                  //röd text
  }
}





