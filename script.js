


// Smooth Scroll
document.documentElement.style.scrollBehavior = "smooth";

// Loader
document.body.style.overflow = "hidden";

window.addEventListener("load", () => {
    document.body.style.overflow = "auto";
});

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

// Falling Flowers
function createFlower() {

    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = "🌷";

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = (15 + Math.random() * 20) + "px";
    flower.style.animationDuration = (6 + Math.random() * 6) + "s";
    flower.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 12000);
}

setInterval(createFlower, 1000);

// =======================
// Slider
// =======================

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {

    slides.style.transform = `translateX(-${i * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));

    dots[i].classList.add("active");
}

function nextSlide() {

    index++;

    if (index >= images.length) {
        index = 0;
    }

    showSlide(index);
}

// Auto Slide
setInterval(nextSlide, 3000);

// Swipe Support
let startX = 0;

slides.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {

    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        index = (index + 1) % images.length;
    } else if (endX - startX > 50) {
        index = (index - 1 + images.length) % images.length;
    }

    showSlide(index);

});

// Click on Dots
dots.forEach((dot, i) => {

    dot.addEventListener("click", () => {

        index = i;

        showSlide(index);

    });

});

// First Slide
showSlide(0);