const hangman = [
    'hangman-head',
    'hangman-body',
    'hangman-left-arm',
    'hangman-right-arm',
    'hangman-left-leg',
    'hangman-right-leg'
]

function hangmanReveal(mistake) {
    const makeHangman = document.querySelector('.hangman-display')
    //TODO: SKAPA ETT DIV ELEMENT OCH STOPPA BILDERNA INDIVIDUELLT!
     const img = document.createElement('img');

    img.src = `../../assets/images/${hangman[mistake]}.png`;
    img.alt = 'hangman display';
    
    img.classList.add(`wrong-guess-img-${mistake}`, 'hangman-general');
    makeHangman.appendChild(img);
}

export { hangmanReveal }