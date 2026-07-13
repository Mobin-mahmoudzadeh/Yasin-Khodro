let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () =>{
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};

window.onscroll = ()=>{
   menu.classList.remove("move");
   navbar.classList.remove("open-menu"); 
};

const animate = ScrollReveal({
    origin:"top",
    distanse:"60px",
    duration:"2500",
    delay:400
});
animate.reveal(".nav, .headgin");
animate.reveal(".home-img img", {origin:"left"});
animate.reveal(".input-form", {origin:"bottom"});

animate.reveal(".trend-box, .rental-box, team-box, .t-box, .newsletter" ,{
    interval:100,
});