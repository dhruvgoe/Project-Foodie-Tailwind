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
const navlogo = document.querySelectorAll('.nav-logo');

window.addEventListener('scroll',() => {
    if(window.scrollY>85)
    {
        navbar.classList.add('navbar-active');
        navlogo.forEach((element) => {
            element.style.color="black";
        })
    }
    else
    {
        navbar.classList.remove('navbar-active');
        navlogo.forEach((element) => {
            element.style.color="white";
        })
    }
})

window.addEventListener('resize',() => {
    if(window.innerWidth>=768)
    {
        cross.classList.add('hidden');
        bars.classList.remove('hidden');
        menu.classList.add('scale-y-0');
    }
})

// Review Section

const rev = [
  {
    id: 1,
    name: "Robert William",
    role: "CEO Kingfisher",
    image: "./Images/avatar-1.jpg",
    r: "I would be lost without restaurant. I would like to personally thank you for your outstanding product.",
  },
  {
    id: 2,
    name: "Thomas Josef",
    role: "CEO Getforce",
    image: "./Images/avatar-2.jpg",
    r: "I would be lost without restaurant. I would like to personally thank you for your outstanding product.",
  },
  {
    id: 3,
    name: "Charles Richard",
    role: "CEO Angela",
    image: "./Images/avatar-3.jpg",
    r: "I would be lost without restaurant. I would like to personally thank you for your outstanding product.",
  },
];

const avatar = document.getElementById('avatar');
const naam = document.getElementById('naam');
const role = document.getElementById('role');
const review = document.getElementById('review');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const surprise = document.getElementById('surprise');

let data = 0;

const renderReview = () => {
    avatar.src = rev[data].image;
    naam.innerHTML = rev[data].name;
    role.innerHTML = rev[data].role;
    review.innerHTML = rev[data].r;
}
renderReview();
leftBtn.addEventListener('click',() => {
    data = data-1<0?rev.length-1:data-1;
    renderReview();
})
rightBtn.addEventListener('click',() => {
    data = data+1>=rev.length?0:data+1;
    renderReview();
})
surprise.addEventListener('click',() => {
    
    let randomIndex = Math.floor(Math.random()*rev.length);
    data=randomIndex;
    renderReview();
})