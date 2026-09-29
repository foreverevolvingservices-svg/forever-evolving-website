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

// Portal hover visual (no audio)
const portalGate = document.querySelector(".portal-gate");
if (portalGate) {
    portalGate.addEventListener("mouseenter", () => {
        // visual-only hover effect can go here
    });

    portalGate.addEventListener("mouseleave", () => {
        // visual-only reset can go here
    });

    portalGate.addEventListener("click", () => {
        // visual-only click effect can go here
    });
}

// Realm hover + click (no audio)
const realmCards = document.querySelectorAll(".realm-card");

realmCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        // visual-only hover effect
    });

    card.addEventListener("click", () => {
        // visual-only click effect
    });
});
