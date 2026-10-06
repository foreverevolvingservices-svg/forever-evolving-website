/* ============================================
   SCROLL REVEAL ANIMATION ENGINE
============================================ */

const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-shimmer'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

revealElements.forEach(el => revealObserver.observe(el));


/* ============================================
   REALM GATEWAY SCROLL TRANSITION
============================================ */

const gateway = document.querySelector('#realm-gateway');
const experiences = document.querySelector('#experiences');

window.addEventListener('scroll', () => {
    const gatewayBottom = gateway.getBoundingClientRect().bottom;

    if (gatewayBottom < window.innerHeight * 0.4) {
        gateway.classList.add('fade-out');
        experiences.classList.add('visible');
    }
});


/* ============================================
   NAVIGATION INTERACTIVITY
============================================ */

const nav = document.querySelector('#top-nav');
const mobileToggle = document.querySelector('.nav-mobile-toggle');
const navLinks = document.querySelector('.nav-links');

// Shrink nav on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
