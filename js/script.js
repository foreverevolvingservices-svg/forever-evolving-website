function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");

    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
}

/* ---------------------------------------------------------
   Ambient Sound Trigger
--------------------------------------------------------- */
const ambientSound = document.getElementById('ambientSound');
let soundPlayed = false;

window.addEventListener('scroll', () => {
    const storySection = document.getElementById('our-story');
    const rect = storySection.getBoundingClientRect();

    if (!soundPlayed && rect.top < window.innerHeight * 0.75) {
        ambientSound.volume = 0.25;
        ambientSound.play();
        soundPlayed = true;
    }
});
/* --------------------------------------------------------------
   Mobile Menu Toggle
-------------------------------------------------------------- */
function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");

    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
}

/* ---------------------------------------------------------
   Horizon Shift Animation
--------------------------------------------------------- */
window.addEventListener('scroll', () => {
    const storySection = document.getElementById('our-story');
    const rect = storySection.getBoundingClientRect();
    const progress = Math.min(Math.max((window.innerHeight - rect.top) / window.innerHeight, 0), 1);

    if (progress < 0.33) {
        storySection.classList.remove('horizon-mid', 'horizon-sunset');
    } else if (progress < 0.66) {
        storySection.classList.add('horizon-mid');
        storySection.classList.remove('horizon-sunset');
    } else {
        storySection.classList.add('horizon-sunset');
        storySection.classList.remove('horizon-mid');
    }
});

