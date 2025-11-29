const overlays = {
  name: document.querySelector('.overlay-name-display'),
  scoreboard: document.querySelector('.scoreboard-display'),
  winner: document.querySelector('.winner-display'),
  loser: document.querySelector('.loser-display')
};

function hideAllOverlays() {
    Object.values(overlays).forEach(el => {
        el.classList.add('hide');
    })
}

function showOverlay(type) {
    hideAllOverlays()

    const el = overlays[type]
    el.classList.remove('hide')
}

export {hideAllOverlays, showOverlay}