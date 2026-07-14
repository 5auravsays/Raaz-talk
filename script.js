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

    flower.innerHTML = "🌸";

    flower.style.left = Math.random()*100 + "vw";

    flower.style.animationDuration = (4 + Math.random()*4) + "s";

    document.body.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },8000);

}

setInterval(createFlower,500);