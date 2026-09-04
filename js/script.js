function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");
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

    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
}
