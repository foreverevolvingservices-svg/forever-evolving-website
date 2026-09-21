// Ambient audio
const skyAmbience = document.getElementById("sky-ambience");
if (skyAmbience) {
    skyAmbience.volume = 0.4;
    skyAmbience.play().catch(() => {});
}

// Welcome chime
const welcomeChime = document.getElementById("welcome-chime");
let chimePlayed = false;

window.addEventListener("click", () => {
    if (!chimePlayed && welcomeChime) {
        welcomeChime.volume = 0.7;
        welcomeChime.play();
        chimePlayed = true;
    }
});
