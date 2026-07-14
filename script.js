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
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    .slider{
    width:95%;
    max-width:900px;
    margin:20px auto;
    overflow:hidden;
    border-radius:15px;
    box-shadow:0 8px 20px rgba(0,0,0,.2);
}

.slides{
    display:flex;
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    scroll-behavior:smooth;
    scrollbar-width:none;
}

.slides::-webkit-scrollbar{
    display:none;
}
const slides = document.querySelector(".slides");
const imgs = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i){
    slides.style.transform = `translateX(-${i*100}%)`;

    dots.forEach(d=>d.classList.remove("active"));
    dots[i].classList.add("active");
}

function nextSlide(){
    index++;
    if(index>=imgs.length) index=0;
    showSlide(index);
}

setInterval(nextSlide,3000);

// Swipe Support
let startX=0;

slides.addEventListener("touchstart",(e)=>{
    startX=e.touches[0].clientX;
});

slides.addEventListener("touchend",(e)=>{
    let endX=e.changedTouches[0].clientX;

    if(startX-endX>50){
        index=(index+1)%imgs.length;
    }else if(endX-startX>50){
        index=(index-1+imgs.length)%imgs.length;
    }

    showSlide(index);
});