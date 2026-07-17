let splash = document.getElementById("splash");
let mainCountent = document.getElementById("main-content");

setTimeout(function () {

    splash.style.display = "none";

    mainCountent.style.display = "block";
}, 2000);

const text = "Easy Ride.";
const typingElement = document.getElementById("typing-texts");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100)
    }
}

window.onload = () => {
    typingElement.textContent = "";
    index = 0;
    typeWriter();
};




const slider = document.querySelector(".slider");

let currentSlide = 0;
const totalSlides = 5;

setInterval(() => {

    currentSlide++;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    slider.style.transform = `translateX(-${currentSlide * 100}vw)`;

}, 2000); // 10000ms = 10 seconds



 function show_nav() {
                    var nav_items = document.getElementById("nav-items");
                    nav_items.classList.toggle("open");
                }