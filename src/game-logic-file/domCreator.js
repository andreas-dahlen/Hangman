function revealLetter(index) {
    const slots = document.querySelectorAll('.letter-slot')
    const slot = slots[index]
    slot.querySelector('.individual-letter').classList.remove('hidden');
}

function showError(message) {
    const box = document.querySelector('#input-error');

    box.textContent = message;
    box.classList.remove('hidden');

    clearTimeout(window._errorTimeout);

    window._errorTimeout = setTimeout(() => {
        box.classList.add('hidden');
    }, 4000);
}

function mistakeDisplay(input) {

    const pos = document.querySelector('.wrong-guess-display')
    const divider = document.createElement('div')
    divider.classList.add('wrong-guess-object')

    if (input === '') {
        const img = document.createElement('img');
        img.src = './assets/images/cowboymelon.png';
        img.alt = 'Wrong word guess';

        divider.appendChild(img);
    } else {
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
            'Good! now we cooking!',
            'Yeehaw! You nailed it!',
            'Good work, partner!',
            'You’re rustlin’ up the letters!',
            'Well done, cowboy cook!',
            'Hot diggity! That’s right!',
            'Cowpoke approved!',
            'You got it! Now let’s wrangle the next one!',
            'Right on! You’re on a roll!'
        ],
        wrong: [
            'Ooof',
            'Dang, guess again!',
            'Pause and think!',
            'Better luck next guess!',
            'Hint! The cowboy likes food!',
            'Dang, missin’ that one!',
            'Hold your horses! Try again!',
            'Nope, think like a cowboy cook!',
            'Careful now, partner!',
            'Oops! The campfire ain’t hot yet!',
            'Think before you guess, cowboy!',
            'Hint: This grub is tasty!',
            'Try wrangling another letter!'
        ]
    };

    const pElement = document.querySelector('.guess-message');
    const selectedArray = state ? messages.correct : messages.wrong;
    const randomMessage = selectedArray[Math.floor(Math.random() * selectedArray.length)];
    pElement.textContent = randomMessage;
}

function guessResultDisplayEnding() {
    const pElement = document.querySelector('.guess-message');
    pElement.textContent = 'Round up your guesses! You can try a whole word or just a letter. Six lives in the saddle. The grub’s always delicious. Good luck, cowboy!'
}

export { revealLetter, showError, mistakeDisplay, guessResultDisplay, guessResultDisplayEnding }