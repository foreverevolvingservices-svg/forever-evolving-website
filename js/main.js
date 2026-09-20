// main.js is intentionally clean and stable.
// All previous event listeners and old IDs have been removed
// because the new index.html no longer contains those elements.

// --- AUDIO SETUP ---

// Get audio elements safely
const skyAmbience = document.getElementById("sky-ambience");
const welcomeChime = document.getElementById("welcome-chime");

// Play sky ambience when the page loads
if (skyAmbience) {
    skyAmbience.volume = 0.4;
    skyAmbience.play().catch(() => {
        // Autoplay may be blocked; user interaction will trigger it later
    });
}

// Play welcome chime once on first interaction
let chimePlayed = false;

window.addEventListener("click", () => {
    if (!chimePlayed && welcomeChime) {
        welcomeChime.volume = 0.7;
        welcomeChime.play();
        chimePlayed = true;
    }
});
