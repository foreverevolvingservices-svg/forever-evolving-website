/* --------------------------------------------------
   GLOBAL VARIABLES
-------------------------------------------------- */
let soundEnabled = true;

/* --------------------------------------------------
   AUDIO FILES (ADD YOUR OWN FILE PATHS)
-------------------------------------------------- */
const sectionAudio = {
    welcome: new Audio("audio/welcome.mp3"),
    ourStory: new Audio("audio/ourstory.mp3"),
    gate: new Audio("audio/gate.mp3"),
    realms: new Audio("audio/realms.mp3"),
    healthyNoggin: new Audio("audio/healthy.mp3"),
    findingPeace: new Audio("audio/peace.mp3"),
    unity: new Audio("audio/unity.mp3"),
    observatory: new Audio("audio/observatory.mp3"),
    events: new Audio("audio/events.mp3"),
    blog: new Audio("audio/blog.mp3"),
    contact: new Audio("audio/contact.mp3"),
    footer: new Audio("audio/footer.mp3")
};

/* Prevent overlapping audio */
Object.values(sectionAudio).forEach(a => {
    a.volume = 0.55;
});

/* --------------------------------------------------
   SOUND TOGGLE (LANTERN)
-------------------------------------------------- */
const lantern = document.getElementById("sound-toggle");

lantern.addEventListener("click", () => {
    soundEnabled = !soundEnabled;

    if (!soundEnabled) {
        Object.values(sectionAudio).forEach(a => a.pause());
        lantern.style.opacity = "0.5";
    } else {
        lantern.style.opacity = "1";
    }

    localStorage.setItem("soundEnabled", soundEnabled);
});

/* Load saved preference */
if (localStorage.getItem("soundEnabled") === "false") {
    soundEnabled = false;
    lantern.style.opacity = "0.5";
}

/* --------------------------------------------------
   FADE-IN ON SCROLL
-------------------------------------------------- */
const fadeElements = document.querySelectorAll(".fade-in");

function handleFadeIn() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", handleFadeIn);
window.addEventListener("load", handleFadeIn);

/* --------------------------------------------------
   PLAY AUDIO WHEN SECTION ENTERS VIEW
-------------------------------------------------- */
function playSectionAudio(id) {
    if (!soundEnabled) return;

    const audio = sectionAudio[id];
    if (audio) {
        Object.values(sectionAudio).forEach(a => a.pause());
        audio.currentTime = 0;
        audio.play();
    }
}

function handleSectionAudio() {
    const sections = [
        { id: "welcome", audio: "welcome" },
        { id: "our-story", audio: "ourStory" },
        { id: "gate", audio: "gate" },
        { id: "realms", audio: "realms" },
        { id: "realm-healthy-noggin", audio: "healthyNoggin" },
        { id: "realm-finding-peace", audio: "findingPeace" },
        { id: "realm-unity", audio: "unity" },
        { id: "realm-observatory", audio: "observatory" },
        { id: "events", audio: "events" },
        { id: "blog", audio: "blog" },
        { id: "contact", audio: "contact" },
        { id: "footer", audio: "footer" }
    ];

    sections.forEach(sec => {
        const el = document.getElementById(sec.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight / 1.3 && rect.bottom > 0) {
            playSectionAudio(sec.audio);
        }
    });
}

window.addEventListener("scroll", handleSectionAudio);

/* --------------------------------------------------
   SMOOTH SCROLL FOR NAV LINKS
-------------------------------------------------- */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
        if (link.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

/* --------------------------------------------------
   REALM BUTTONS SCROLL-TO
-------------------------------------------------- */
const realmLinks = document.querySelectorAll("#realms .nav-link");

realmLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

