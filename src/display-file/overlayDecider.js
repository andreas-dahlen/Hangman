const overlays = {
  name: document.querySelector('.overlayNameDisplay'),
  scoreboard: document.querySelector('.scoreboard-display'),
  winner: document.querySelector('.winner-display'),
  loser: document.querySelector('.loser-display')
};

function hideAllOverlays() {
    Object.values(overlays).forEach(el => {
        el.classList.add('hidden');
    })
}

function showOverlay(type) {
    hideAllOverlays()

    const el = overlays[type]
    el.classList.remove('hidden')
}