// Smooth Scroll
document.documentElement.style.scrollBehavior = "smooth";

// Scroll Animation
const cards = document.querySelectorAll(".poem");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});

// Loader
window.addEventListener("load", () => {
    document.body.style.overflow = "auto";
});

document.body.style.overflow = "hidden";