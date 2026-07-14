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

function createFlower(){

    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = "🌷";

    flower.style.left = Math.random()*100 + "vw";

    // अलग-अलग साइज
    flower.style.fontSize = (15 + Math.random()*20) + "px";

    // अलग-अलग स्पीड
    flower.style.animationDuration = (6 + Math.random()*6) + "s";

    // थोड़ा-थोड़ा delay
    flower.style.animationDelay = Math.random()*2 + "s";

    document.body.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },12000);

}

// कम फूल बनेंगे
setInterval(createFlower,1000);
// Auto Image Slider

const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

},3000);