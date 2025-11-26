const overlays = {
  name: document.querySelector('.overlay-name-display'), //TODO: är detta rätt adress att hämta från??
  scoreboard: document.querySelector('.scoreboard-display'), //TODO: är detta rätt adress att hämta från
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