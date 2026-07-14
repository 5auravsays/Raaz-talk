/* Scroll Animation */

.hidden{
    opacity:0;
    transform:translateY(80px);
    transition:all .8s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}

/* Animated Background */

body{
    background:linear-gradient(-45deg,#ffd6e7,#ffe4ec,#fff,#ffd1dc);
    background-size:400% 400%;
    animation:bgMove 12s ease infinite;
}

@keyframes bgMove{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

/* Premium Button */

a{
    box-shadow:0 0 20px rgba(255,45,117,.4);
}

a:hover{
    box-shadow:0 0 35px rgba(255,45,117,.8);
}

/* Premium Card */

.poem{
    backdrop-filter:blur(8px);
    border:1px solid rgba(255,255,255,.4);
}