(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) b(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const w of o.addedNodes)
          w.tagName === "LINK" && w.rel === "modulepreload" && b(w);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function b(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = r(n);
    fetch(n.href, o);
  }
})();
const M = document.getElementById("load");
window.addEventListener("load", () => {
  setTimeout(() => {
    M.classList.add("opacity-0", "invisible"),
      document.body.classList.remove("overflow-hidden");
  }, 2e3);
});
const h = document.getElementById("bars"),
  y = document.getElementById("cross"),
  v = document.getElementById("menu");
h.addEventListener("click", () => {
  h.classList.toggle("hidden"),
    y.classList.toggle("hidden"),
    v.classList.toggle("scale-y-0");
});
y.addEventListener("click", () => {
  y.classList.toggle("hidden"),
    h.classList.toggle("hidden"),
    v.classList.toggle("scale-y-0");
});
const E = document.querySelector(".navbar"),
  B = document.querySelectorAll(".nav-logo");
window.addEventListener("scroll", () => {
  window.scrollY > 85
    ? (E.classList.add("navbar-active"),
      B.forEach((t) => {
        t.style.color = "black";
      }))
    : (E.classList.remove("navbar-active"),
      B.forEach((t) => {
        t.style.color = "white";
      }));
});
window.addEventListener("resize", () => {
  window.innerWidth >= 768 &&
    (y.classList.add("hidden"),
    h.classList.remove("hidden"),
    v.classList.add("scale-y-0"));
});
const C = ["All", "Burger", "Pizza", "Sandwich", "Drinks"];
let d = 0;
const j = document.querySelector(".filterContainer"),
  L = document.querySelector(".cardContainer");
C.forEach((t, e) => {
  let r = document.createElement("button");
  (r.innerText = `${t}`),
    r.classList.add(
      "bg-[#dd9d2d]",
      "py-2",
      "px-3",
      "rounded-md",
      "text-white",
      "font-bold",
      "filter",
      "border-2",
      "border-[#dd9d2d]"
    ),
    j.appendChild(r);
});
const m = document.querySelectorAll(".filter"),
  z = (t) => {
    m[d].classList.remove("bg-white", "text-[#dd9d2d]"),
      m[d].classList.add("bg-[#dd9d2d]", "text-white"),
      (d = t),
      m[d].classList.remove("bg-[#dd9d2d]", "text-white"),
      m[d].classList.add("bg-white", "text-[#dd9d2d]");
    let e = S;
    d !== 0 && (e = S.filter((r) => r.category === C[d])),
      (L.innerHTML = ""),
      e.forEach((r) => {
        L.innerHTML =
          L.innerHTML +
          `
              <div
                class="w-[31%] min-w-[250px] bg-white rounded-lg flex flex-col justify-between items-start gap-y-2 p-4"
              >
                <img src="${r.img}" class="mx-auto w-[50%]" />

                <h2 class="text-2xl font-bold">${r.name}</h2>

                <p class="text-xl font-bold"><span class="text-red-500">Price :</span> <span class="text-[#dd9d2d]">${r.price}</span></p>
              </div>
      `;
      });
  };
m.forEach((t, e) => {
  t.addEventListener("click", () => {
    z(e);
  });
});
const S = [
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
z(0);
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
  P = document.getElementById("avatar"),
  T = document.getElementById("naam"),
  H = document.getElementById("role"),
  A = document.getElementById("review"),
  q = document.getElementById("left-btn"),
  O = document.getElementById("right-btn"),
  D = document.getElementById("surprise");
let i = 0;
const f = () => {
  (P.src = c[i].image),
    (T.innerHTML = c[i].name),
    (H.innerHTML = c[i].role),
    (A.innerHTML = c[i].r);
};
f();
q.addEventListener("click", () => {
  (i = i - 1 < 0 ? c.length - 1 : i - 1), f();
});
O.addEventListener("click", () => {
  (i = i + 1 >= c.length ? 0 : i + 1), f();
});
D.addEventListener("click", () => {
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
  x = document.querySelectorAll(".textCard1");
let p = 0;
g.forEach((t, e) => {
  t.addEventListener("mouseover", () => {
    g[p].classList.remove("h-2/5"),
      g[p].classList.add("h-1/5"),
      g[e].classList.remove("h-1/5"),
      g[e].classList.add("h-2/5"),
      x[p].classList.add("opacity-0"),
      x[e].classList.remove("opacity-0"),
      (p = e);
  });
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
  F = document.getElementById("blogImage"),
  N = document.getElementById("blogCaption"),
  R = document.getElementById("date"),
  J = document.getElementById("blogname"),
  $ = document.getElementById("head"),
  W = document.getElementById("para");
let a = 0;
const I = () => {
    (F.src = s[a].img),
      (N.innerHTML = s[a].caption),
      (R.innerHTML = s[a].date),
      (J.innerHTML = s[a].naam),
      ($.innerHTML = s[a].heading),
      (W.innerHTML = s[a].para);
  },
  K = document.getElementById("left-btn-blog"),
  G = document.getElementById("right-btn-blog");
I();
K.addEventListener("click", () => {
  (a = a - 1 < 0 ? s.length - 1 : a - 1), I();
});
G.addEventListener("click", () => {
  (a = a + 1 >= s.length ? 0 : a + 1), I();
});
