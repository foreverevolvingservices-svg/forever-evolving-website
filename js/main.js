// Realm-specific teleport lines
const realmTeleportLines = {
    "#library": [
        "Crossing over… wisdom is waiting.",
        "Teleporting… your next truth is opening.",
        "Traveling… the Library is ready for you."
    ],
    "#guidance": [
        "Dimension shift… clarity incoming.",
        "Teleporting… your inner voice is rising.",
        "Crossing over… guidance awaits."
    ],
    "#unity": [
        "Portal jump… connection is calling.",
        "Teleporting… your heart is opening.",
        "Crossing over… you’re not alone here."
    ],
    "#insight": [
        "Upward we go… your vision is expanding.",
        "Teleporting… revelation is near.",
        "Crossing over… the stars are aligning for you."
    ],
    "#hero": [
        "Teleporting… look at you, choosing growth.",
        "Traveling… your journey is resetting beautifully.",
        "Crossing over… welcome back to your beginning."
    ]
};

function getRealmTeleportLine(targetRealm) {
    const lines = realmTeleportLines[targetRealm];
    if (!lines) return "Teleporting… your evolution is in motion.";
    const index = Math.floor(Math.random() * lines.length);
    return lines[index];
}

function playRealmTeleportLine(targetRealm) {
    const line = getRealmTeleportLine(targetRealm);
    const narratorElement = document.getElementById("teleport-narrator");

    narratorElement.textContent = line;
    narratorElement.classList.add("show");

    setTimeout(() => narratorElement.classList.remove("show"), 2000);
}

document.querySelectorAll(".portal-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        const target = icon.getAttribute("data-target");
        playRealmTeleportLine(target);

        const section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// University of Life Map interaction
const uolSteps = document.querySelectorAll(".uol-step");
const uolPanels = document.querySelectorAll(".uol-panel");

uolSteps.forEach(step => {
    step.addEventListener("click", () => {
        const targetStep = step.getAttribute("data-step");

        // update active step
        uolSteps.forEach(s => s.classList.remove("active"));
        step.classList.add("active");

        // update active panel
        uolPanels.forEach(panel => {
            if (panel.getAttribute("data-step") === targetStep) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        });
    });
});
