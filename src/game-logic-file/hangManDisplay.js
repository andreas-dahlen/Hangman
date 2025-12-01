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
     const img = document.createElement('img');

    img.src = `./assets/images/${hangman[mistake]}.svg`;
    img.alt = 'hangman display';
    
    img.classList.add(`wrong-guess-img-${mistake}`, 'hangman-img');
    makeHangman.appendChild(img);
}

export { hangmanReveal }