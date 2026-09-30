// Silhouette Reveal
const closingSilhouette = document.querySelector(".closing-silhouette");

if (closingSilhouette) {
    const silhouetteObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                closingSilhouette.classList.add("silhouette-visible");
            }
        });
    }, {
        threshold: 0.2
    });

    silhouetteObserver.observe(closingSilhouette);
}
