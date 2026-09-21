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
// Portal hover sound
const portalGate = document.querySelector(".portal-gate");
const portalHum = new Audio("sounds/portal-hum.mp3");
portalHum.volume = 0.4;

if (portalGate) {
    portalGate.addEventListener("mouseenter", () => {
        portalHum.play().catch(() => {});
    });

    portalGate.addEventListener("mouseleave", () => {
        portalHum.pause();
        portalHum.currentTime = 0;
    });
}
// Portal click sound
const portalClick = new Audio("sounds/portal-click.mp3");
portalClick.volume = 0.7;

if (portalGate) {
    portalGate.addEventListener("click", () => {
        portalClick.play().catch(() => {});
    });
}
// Ensure star drift layer animates smoothly
const starLayer = document.querySelector(".star-drift-layer");
if (starLayer) {
    starLayer.style.willChange = "background-position";
}
// Optimize cloud drift animation
const cloudsBG = document.querySelector(".clouds-bg");
if (cloudsBG) {
    cloudsBG.style.willChange = "background-position";
}
// Realm hover + click sounds
const realmCards = document.querySelectorAll(".realm-card");

const realmHoverSound = new Audio("sounds/realm-hover.mp3");
realmHoverSound.volume = 0.5;

const realmClickSound = new Audio("sounds/realm-click.mp3");
realmClickSound.volume = 0.7;

realmCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        realmHoverSound.play().catch(() => {});
    });

    card.addEventListener("click", () => {
        realmClickSound.play().catch(() => {});
    });
});
