//shows a letter
function revealLetter(index) {
    const slots = document.querySelectorAll('.letter-slot')
    const slot = slots[index]
    slot.querySelector('.individual-letter').classList.remove('hidden');
}

//shows error message
function showError(message) {
    const box = document.querySelector(".error-msg");

    box.textContent = message;
    box.classList.remove("hidden");

    clearTimeout(window._errorTimeout);
    
    window._errorTimeout = setTimeout(() => {
        box.classList.add("hidden");
    }, 4000);
}

//puts words in the mistakeDisplay
function mistakeDisplay(input) {

    const container = document.createElement('div')
    container.classList.add('wrong-guess-container')

    const pos = document.querySelector('.wrong-guess-display')

    if (input ==='') {

 const img = document.createElement('img');
        img.src = './path/to/your/image.png';   // <-- change this
        img.alt = 'Wrong word guess';
        img.classList.add('wrong-guess-img');    // optional for styling
        container.appendChild(img);
    } else {
        // Create text for wrong letter guess
        const pElement = document.createElement('p');
        pElement.textContent = input;
        container.appendChild(pElement);
    }

    pos.appendChild(container);
} 

function guessResultDisplay() {
    const pos = document.querySelector('.wrong-result-display')

    const pElement = document.createElement('p')
    


}

export {revealLetter, showError, mistakeDisplay}