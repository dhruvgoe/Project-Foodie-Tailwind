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

// Blog Section

const blogData = [
  {
    id: 1,
    img: "./Images/blog-1.jpg",
    caption: "Pizza",
    date: "Jan 1 2023",
    naam: "Jonathan Smith",
    heading: "What do you Think about Cheese Pizza recipies?",
    para: "Financial experts support or help you to to find out which way you can raise your funds more...",
  },
  {
    id: 2,
    img: "./Images/blog-2.jpg",
    caption: "Burger",
    date: "Sept 15 2020",
    naam: "Jonathan Swift",
    heading: "Making Chicken Strips with New Delicious Ingredients",
    para: "Financial experts support or help you to to find out which way you can raise your funds more...",
  },
  {
    id: 3,
    img: "./Images/blog-3.jpg",
    caption: "Chicken",
    date: "Mar 12 2025",
    naam: "Swift Smith",
    heading: "Innovator hot Pasta Raw cheesy facts",
    para: "Financial experts support or help you to to find out which way you can raise your funds more...",
  },
];

const imageBlog = document.getElementById('blogImage');
const caption = document.getElementById('blogCaption');
const date = document.getElementById('date');
const Naam = document.getElementById('blogname');
const heading = document.getElementById('head');
const para = document.getElementById('para');

let index = 0;

const renderBlog = () => {
    imageBlog.src = blogData[index].img;
    caption.innerHTML = blogData[index].caption;
    date.innerHTML = blogData[index].date;
    Naam.innerHTML = blogData[index].naam;
    heading.innerHTML = blogData[index].heading;
    para.innerHTML = blogData[index].para;
}

const lbtn = document.getElementById("left-btn-blog");
const rbtn = document.getElementById("right-btn-blog");

renderBlog();
lbtn.addEventListener("click", () => {
  index = index - 1 < 0 ? blogData.length - 1 : index - 1;
  renderBlog();
});
rbtn.addEventListener("click", () => {
  index = index + 1 >= blogData.length ? 0 : index + 1;
  renderBlog();
});