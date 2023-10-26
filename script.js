// Toggling of Bars and Cross
const bars = document.getElementById('bars');
const cross = document.getElementById('cross');
const menu = document.getElementById('menu');

bars.addEventListener('click',() => {
    bars.classList.toggle('hidden');
    cross.classList.toggle('hidden');
    menu.classList.toggle('scale-y-0');
})
cross.addEventListener('click',() => {
    cross.classList.toggle('hidden');
    bars.classList.toggle('hidden');
    menu.classList.toggle('scale-y-0');
})

const navbar = document.querySelector(".navbar");

window.addEventListener('scroll',() => {
    navbar.classList[window.scrollY>100?"add":"remove"]("navbar-active");
})

