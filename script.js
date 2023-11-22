// Loading Screen

const loader = document.getElementById("load");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("opacity-0", "invisible");
    document.body.classList.remove("overflow-hidden");
  }, 2000);
});

// Toggling of Bars and Cross
const bars = document.getElementById("bars");
const cross = document.getElementById("cross");
const menu = document.getElementById("menu");

bars.addEventListener("click", () => {
  bars.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  menu.classList.toggle("scale-y-0");
});
cross.addEventListener("click", () => {
  cross.classList.toggle("hidden");
  bars.classList.toggle("hidden");
  menu.classList.toggle("scale-y-0");
});

const navbar = document.querySelector(".navbar");
const navlogo = document.querySelectorAll(".nav-logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 85) {
    navbar.classList.add("navbar-active");
    navlogo.forEach((element) => {
      element.style.color = "black";
    });
  } else {
    navbar.classList.remove("navbar-active");
    navlogo.forEach((element) => {
      element.style.color = "white";
    });
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    cross.classList.add("hidden");
    bars.classList.remove("hidden");
    menu.classList.add("scale-y-0");
  }
});

// Menu Section

const filters = ["All", "Burger", "Pizza", "Sandwich", "Drinks"];

let currentFilter = 0;

const filterContainer = document.querySelector(".filterContainer");
const cardContainer = document.querySelector(".cardContainer");

filters.forEach((filter, index) => {
  let newFilter = document.createElement("button");
  newFilter.innerText = `${filter}`;
  newFilter.classList.add(
    "bg-[#dd9d2d]",
    "py-2",
    "px-3",
    "rounded-md",
    "text-white",
    "font-bold",
    "filter",
    "border-4",
    "border-[#dd9d2d]"
  );
  filterContainer.appendChild(newFilter);

  // newFilter.addEventListener("click", () => {
  //   menuHandler(index);
  // });
});

const clickFilter = document.querySelectorAll(".filter");

const menuHandler = (index) => {
  clickFilter[currentFilter].classList.remove("bg-white", "text-[#dd9d2d]");
  clickFilter[currentFilter].classList.add("bg-[#dd9d2d]", "text-white");
  currentFilter = index;
  clickFilter[currentFilter].classList.remove("bg-[#dd9d2d]", "text-white");
  clickFilter[currentFilter].classList.add("bg-white", "text-[#dd9d2d]");
  let currentItems = allmenu;
  if (currentFilter !== 0) {
    currentItems = allmenu.filter(
      (item) => item.category === filters[currentFilter]
    );
  }
  // console.log(currentItems);
  cardContainer.innerHTML = "";
  currentItems.forEach((item) => {
    cardContainer.innerHTML =
      cardContainer.innerHTML +
      `
              <div
                class="w-[31%] min-w-[250px] bg-white rounded-lg flex flex-col justify-between items-start gap-y-2 p-4"
              >
                <img src="${item.img}" class="mx-auto w-[50%]" />

                <h2 class="text-2xl font-bold">${item.name}</h2>

                <p class="text-xl font-bold"><span class="text-red-500">Price :</span> <span class="text-[#dd9d2d]">${item.price}</span></p>
              </div>
      `;
  });
};

clickFilter.forEach((item, index) => {
  item.addEventListener("click", () => {
    menuHandler(index);
  });
});

const allmenu = [
  {
    id: 1,
    category: "Burger",
    img: "./Images/Burger-1.jpeg",
    price: "₹100",
    name: "American Burger",
  },
  {
    id: 2,
    category: "Burger",
    img: "./Images/Burger-2.jpeg",
    price: "₹150",
    name: "Mc AlooTikki Burger",
  },
  {
    id: 3,
    category: "Burger",
    img: "./Images/Burger-3.jpeg",
    price: "₹200",
    name: "Spanish Burger",
  },
  {
    id: 4,
    category: "Pizza",
    img: "./Images/Pizza-1.jpeg",
    price: "₹400",
    name: "Margherita",
  },
  {
    id: 5,
    category: "Pizza",
    img: "./Images/Pizza-2.jpeg",
    price: "₹500",
    name: "Peppy Paneer",
  },
  {
    id: 6,
    category: "Pizza",
    img: "./Images/Pizza-3.jpeg",
    price: "₹600",
    name: "Indi Tandoori Paneer",
  },
  {
    id: 7,
    category: "Sandwich",
    img: "./Images/Sandwhich-1.jpeg",
    price: "₹40",
    name: "Rainbow Sandwich",
  },
  {
    id: 8,
    category: "Sandwich",
    img: "./Images/Sandwhich-2.jpeg",
    price: "₹50",
    name: "Corn-Capsicum Sandwich",
  },
  {
    id: 9,
    category: "Sandwich",
    img: "./Images/Sandwhich-3.jpeg",
    price: "₹60",
    name: "Cheese-Chilli Toast",
  },
  {
    id: 10,
    category: "Drinks",
    img: "./Images/Drink-2.jpeg",
    price: "₹50",
    name: "Fanta",
  },
  {
    id: 11,
    category: "Drinks",
    img: "./Images/Drink-3.jpeg",
    price: "₹50",
    name: "Mountain Dew",
  },
];

menuHandler(0);

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

const avatar = document.getElementById("avatar");
const naam = document.getElementById("naam");
const role = document.getElementById("role");
const review = document.getElementById("review");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const surprise = document.getElementById("surprise");

let data = 0;

const renderReview = () => {
  avatar.src = rev[data].image;
  naam.innerHTML = rev[data].name;
  role.innerHTML = rev[data].role;
  review.innerHTML = rev[data].r;
};
renderReview();
leftBtn.addEventListener("click", () => {
  data = data - 1 < 0 ? rev.length - 1 : data - 1;
  renderReview();
});
rightBtn.addEventListener("click", () => {
  data = data + 1 >= rev.length ? 0 : data + 1;
  renderReview();
});
surprise.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * rev.length);
  data = randomIndex;
  renderReview();
});

// Expand Card Section

const cards = document.querySelectorAll(".card");
const textCard = document.querySelectorAll(".textCard");

let ind = 0;

cards.forEach((card, index) => {
  card.addEventListener("mouseover", () => {
    cards[ind].classList.remove("w-2/5");
    cards[ind].classList.add("w-1/5");
    cards[index].classList.remove("w-1/5");
    cards[index].classList.add("w-2/5");

    textCard[ind].classList.add("opacity-0");
    textCard[index].classList.remove("opacity-0");

    ind = index;
  });
});

const cards1 = document.querySelectorAll(".card1");
const textCard1 = document.querySelectorAll(".textCard1");

let ind1 = 0;

cards1.forEach((card, index) => {
  card.addEventListener("mouseover", () => {
    cards1[ind1].classList.remove("h-2/5");
    cards1[ind1].classList.add("h-1/5");
    cards1[index].classList.remove("h-1/5");
    cards1[index].classList.add("h-2/5");

    textCard1[ind1].classList.add("opacity-0");
    textCard1[index].classList.remove("opacity-0");

    ind1 = index;
  });
});

// Deleivery Boy Move On Scroll

const deliveryBoy = document.querySelector(".cycle");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});

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

const imageBlog = document.getElementById("blogImage");
const caption = document.getElementById("blogCaption");
const date = document.getElementById("date");
const Naam = document.getElementById("blogname");
const heading = document.getElementById("head");
const para = document.getElementById("para");

let index = 0;

const renderBlog = () => {
  imageBlog.src = blogData[index].img;
  caption.innerHTML = blogData[index].caption;
  date.innerHTML = blogData[index].date;
  Naam.innerHTML = blogData[index].naam;
  heading.innerHTML = blogData[index].heading;
  para.innerHTML = blogData[index].para;
};

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
