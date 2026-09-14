/* ============================================================
   SCROLL FADE-INS
============================================================ */
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));


/* ============================================================
   COSMIC PARALLAX MOVEMENT
============================================================ */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const sky = document.querySelector('.sky-layer');
  const nebula = document.querySelector('.nebula-layer');
  const stars = document.querySelector('.stars-layer');
  const parallax = document.querySelector('.cosmic-parallax');

  if (sky) sky.style.transform = `translateY(${scrollY * 0.15}px)`;
  if (nebula) nebula.style.transform = `translateY(${scrollY * 0.25}px)`;
  if (stars) stars.style.transform = `translateY(${scrollY * 0.10}px)`;
  if (parallax) parallax.style.transform = `translateY(${scrollY * 0.05}px)`;
});


/* ============================================================
   DROPDOWN MENU
============================================================ */
const toggle = document.querySelector('.nav-dropdown-toggle');
const dropdown = document.querySelector('.nav-dropdown');

if (toggle && dropdown) {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = dropdown.style.display === 'flex';
    dropdown.style.display = isOpen ? 'none' : 'flex';
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== toggle) {
      dropdown.style.display = 'none';
    }
  });
}


/* ============================================================
   COSMIC CLICK PULSE (Optional Enhancement)
============================================================ */
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const pulse = document.createElement('span');
    pulse.classList.add('click-pulse');
    pulse.style.left = `${e.pageX}px`;
    pulse.style.top = `${e.pageY}px`;
    document.body.appendChild(pulse);

    setTimeout(() => pulse.remove(), 600);
  }
});
