(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) E(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const w of r.addedNodes)
          w.tagName === "LINK" && w.rel === "modulepreload" && E(w);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function E(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = o(n);
    fetch(n.href, r);
  }
})();
const j = document.getElementById("load");
window.addEventListener("load", () => {
  setTimeout(() => {
    j.classList.add("opacity-0", "invisible"),
      document.body.classList.remove("overflow-hidden");
  }, 2e3);
});
const h = document.getElementById("bars"),
  y = document.getElementById("cross"),
  I = document.getElementById("menu");
h.addEventListener("click", () => {
  h.classList.toggle("hidden"),
    y.classList.toggle("hidden"),
    I.classList.toggle("scale-y-0");
});
y.addEventListener("click", () => {
  y.classList.toggle("hidden"),
    h.classList.toggle("hidden"),
    I.classList.toggle("scale-y-0");
});
const B = document.querySelector(".navbar"),
  S = document.querySelectorAll(".nav-logo");
window.addEventListener("scroll", () => {
  window.scrollY > 85
    ? (B.classList.add("navbar-active"),
      S.forEach((t) => {
        t.style.color = "black";
      }))
    : (B.classList.remove("navbar-active"),
      S.forEach((t) => {
        t.style.color = "white";
      }));
});
window.addEventListener("resize", () => {
  window.innerWidth >= 768 &&
    (y.classList.add("hidden"),
    h.classList.remove("hidden"),
    I.classList.add("scale-y-0"));
});
const z = ["All", "Burger", "Pizza", "Sandwich", "Drinks"];
let d = 0;
const H = document.querySelector(".filterContainer"),
  L = document.querySelector(".cardContainer");
z.forEach((t, e) => {
  let o = document.createElement("button");
  (o.innerText = `${t}`),
    o.classList.add(
      "bg-[#dd9d2d]",
      "py-2",
      "px-3",
      "rounded-md",
      "text-white",
      "font-bold",
      "filter",
      "border-4",
      "border-[#dd9d2d]"
    ),
    H.appendChild(o);
});
const m = document.querySelectorAll(".filter"),
  T = (t) => {
    m[d].classList.remove("bg-white", "text-[#dd9d2d]"),
      m[d].classList.add("bg-[#dd9d2d]", "text-white"),
      (d = t),
      m[d].classList.remove("bg-[#dd9d2d]", "text-white"),
      m[d].classList.add("bg-white", "text-[#dd9d2d]");
    let e = x;
    d !== 0 && (e = x.filter((o) => o.category === z[d])),
      (L.innerHTML = ""),
      e.forEach((o) => {
        L.innerHTML =
          L.innerHTML +
          `
              <div
                class="w-[31%] min-w-[250px] bg-white rounded-lg flex flex-col justify-between items-start gap-y-2 p-4"
              >
                <img src="${o.img}" class="mx-auto w-[50%]" />

                <h2 class="text-2xl font-bold">${o.name}</h2>

                <p class="text-xl font-bold"><span class="text-red-500">Price :</span> <span class="text-[#dd9d2d]">${o.price}</span></p>
              </div>
      `;
      });
  };
m.forEach((t, e) => {
  t.addEventListener("click", () => {
    T(e);
  });
});
const x = [
  {
    id: 1,
    category: "Burger",
    img: "./assets/Burger-1.jpeg",
    price: "₹100",
    name: "American Burger",
  },
  {
    id: 2,
    category: "Burger",
    img: "./assets/Burger-2.jpeg",
    price: "₹150",
    name: "Mc AlooTikki Burger",
  },
  {
    id: 3,
    category: "Burger",
    img: "./assets/Burger-3.jpeg",
    price: "₹200",
    name: "Spanish Burger",
  },
  {
    id: 4,
    category: "Pizza",
    img: "./assets/Pizza-1.jpeg",
    price: "₹400",
    name: "Margherita",
  },
  {
    id: 5,
    category: "Pizza",
    img: "./assets/Pizza-2.jpeg",
    price: "₹500",
    name: "Peppy Paneer",
  },
  {
    id: 6,
    category: "Pizza",
    img: "./assets/Pizza-3.jpeg",
    price: "₹600",
    name: "Indi Tandoori Paneer",
  },
  {
    id: 7,
    category: "Sandwich",
    img: "./assets/Sandwhich-1.jpeg",
    price: "₹40",
    name: "Rainbow Sandwich",
  },
  {
    id: 8,
    category: "Sandwich",
    img: "./assets/Sandwhich-2.jpeg",
    price: "₹50",
    name: "Corn-Capsicum Sandwich",
  },
  {
    id: 9,
    category: "Sandwich",
    img: "./assets/Sandwhich-3.jpeg",
    price: "₹60",
    name: "Cheese-Chilli Toast",
  },
  {
    id: 10,
    category: "Drinks",
    img: "./assets/Drink-2.jpeg",
    price: "₹50",
    name: "Fanta",
  },
  {
    id: 11,
    category: "Drinks",
    img: "./assets/Drink-3.jpeg",
    price: "₹50",
    name: "Mountain Dew",
  },
];
T(0);
const c = [
    {
      id: 1,
      name: "Robert William",
      role: "CEO Kingfisher",
      image: "./assets/avatar-1.jpg",
      r: "I would be lost without restaurant. I would like to personally thank you for your outstanding product.",
    },
    {
      id: 2,
      name: "Thomas Josef",
      role: "CEO Getforce",
      image: "./assets/avatar-2.jpg",
      r: "I would be lost without restaurant. I would like to personally thank you for your outstanding product.",
    },
    {
      id: 3,
      name: "Charles Richard",
      role: "CEO Angela",
      image: "./assets/avatar-3.jpg",
      r: "I would be lost without restaurant. I would like to personally thank you for your outstanding product.",
    },
  ],
  q = document.getElementById("avatar"),
  A = document.getElementById("naam"),
  O = document.getElementById("role"),
  D = document.getElementById("review"),
  F = document.getElementById("left-btn"),
  R = document.getElementById("right-btn"),
  N = document.getElementById("surprise");
let i = 0;
const f = () => {
  (q.src = c[i].image),
    (A.innerHTML = c[i].name),
    (O.innerHTML = c[i].role),
    (D.innerHTML = c[i].r);
};
f();
F.addEventListener("click", () => {
  (i = i - 1 < 0 ? c.length - 1 : i - 1), f();
});
R.addEventListener("click", () => {
  (i = i + 1 >= c.length ? 0 : i + 1), f();
});
N.addEventListener("click", () => {
  (i = Math.floor(Math.random() * c.length)), f();
});
const l = document.querySelectorAll(".card"),
  k = document.querySelectorAll(".textCard");
let u = 0;
l.forEach((t, e) => {
  t.addEventListener("mouseover", () => {
    l[u].classList.remove("w-2/5"),
      l[u].classList.add("w-1/5"),
      l[e].classList.remove("w-1/5"),
      l[e].classList.add("w-2/5"),
      k[u].classList.add("opacity-0"),
      k[e].classList.remove("opacity-0"),
      (u = e);
  });
});
const g = document.querySelectorAll(".card1"),
  C = document.querySelectorAll(".textCard1");
let p = 0;
g.forEach((t, e) => {
  t.addEventListener("mouseover", () => {
    g[p].classList.remove("h-2/5"),
      g[p].classList.add("h-1/5"),
      g[e].classList.remove("h-1/5"),
      g[e].classList.add("h-2/5"),
      C[p].classList.add("opacity-0"),
      C[e].classList.remove("opacity-0"),
      (p = e);
  });
});
const P = document.querySelector(".cycle");
let v = -80,
  M = 0;
window.addEventListener("scroll", function () {
  let t = P.getBoundingClientRect().top;
  if (t < 500 && t > -250) {
    let e = window.scrollY;
    M < e ? (v += 1) : (v -= 1),
      (M = e),
      (P.style.transform = `translateX(${v}px)`);
  }
});
const s = [
    {
      id: 1,
      img: "./assets/blog-1.jpg",
      caption: "Pizza",
      date: "Jan 1 2023",
      naam: "Jonathan Smith",
      heading: "What do you Think about Cheese Pizza recipies?",
      para: "Financial experts support or help you to to find out which way you can raise your funds more...",
    },
    {
      id: 2,
      img: "./assets/blog-2.jpg",
      caption: "Burger",
      date: "Sept 15 2020",
      naam: "Jonathan Swift",
      heading: "Making Chicken Strips with New Delicious Ingredients",
      para: "Financial experts support or help you to to find out which way you can raise your funds more...",
    },
    {
      id: 3,
      img: "./assets/blog-3.jpg",
      caption: "Chicken",
      date: "Mar 12 2025",
      naam: "Swift Smith",
      heading: "Innovator hot Pasta Raw cheesy facts",
      para: "Financial experts support or help you to to find out which way you can raise your funds more...",
    },
  ],
  $ = document.getElementById("blogImage"),
  J = document.getElementById("blogCaption"),
  W = document.getElementById("date"),
  K = document.getElementById("blogname"),
  Y = document.getElementById("head"),
  G = document.getElementById("para");
let a = 0;
const b = () => {
    ($.src = s[a].img),
      (J.innerHTML = s[a].caption),
      (W.innerHTML = s[a].date),
      (K.innerHTML = s[a].naam),
      (Y.innerHTML = s[a].heading),
      (G.innerHTML = s[a].para);
  },
  X = document.getElementById("left-btn-blog"),
  Q = document.getElementById("right-btn-blog");
b();
X.addEventListener("click", () => {
  (a = a - 1 < 0 ? s.length - 1 : a - 1), b();
});
Q.addEventListener("click", () => {
  (a = a + 1 >= s.length ? 0 : a + 1), b();
});
