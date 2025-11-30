//shows a letter
function revealLetter(index) {
    const slots = document.querySelectorAll('.letter-slot')
    const slot = slots[index]
    slot.querySelector('.individual-letter').classList.remove('hidden');
}

//shows error message
function showError(message) {
    const box = document.querySelector('#input-error');

    box.textContent = message;
    box.classList.remove('hidden');

    clearTimeout(window._errorTimeout);
    
    window._errorTimeout = setTimeout(() => {
        box.classList.add('hidden');
    }, 4000);
}

//puts words in the mistakeDisplay
function mistakeDisplay(input) {

    const pos = document.querySelector('.wrong-guess-display')
    const divider = document.createElement('div')
    divider.classList.add('wrong-guess-object')
    
    if (input ==='') {
        const img = document.createElement('img');
        img.src = '../../assets/images/cowboymelon.png';
        img.alt = 'Wrong word guess';

        divider.appendChild(img);
    } else {
        // Create text for wrong letter guess
        const pElement = document.createElement('p');
        pElement.textContent = input;
        divider.appendChild(pElement);
    }
    pos.appendChild(divider)
}

function guessResultDisplay(state) {
    const messages = {
        correct: [
            'Nice job!',
            'You good!',
            'Getting there!',
            'Awesome!',
            'Well done!',
            'Good! now we cooking!'
        ],
        wrong: [
            'Ooof',
            'Dang, guess again!',
            'Pause and think!',
            'Think before you guess!',
            'Better luck next guess!',
            'Hint! The cowboy likes food!'
        ]
    };

    const pElement = document.querySelector('.guess-message');
    const selectedArray = state ? messages.correct : messages.wrong;
    const randomMessage = selectedArray[Math.floor(Math.random() * selectedArray.length)];
    pElement.textContent = randomMessage;
}

function guessResultDisplayEnding() {
    const pElement = document.querySelector('.guess-message');
    pElement.textContent = 'Guess an entire English word or individual letter. You have six lives. Good luck!'
}

export {revealLetter, showError, mistakeDisplay, guessResultDisplay, guessResultDisplayEnding }