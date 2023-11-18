(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) h(e);
  new MutationObserver((e) => {
    for (const n of e)
      if (n.type === "childList")
        for (const u of n.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && h(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(e) {
    const n = {};
    return (
      e.integrity && (n.integrity = e.integrity),
      e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function h(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = f(e);
    fetch(e.href, n);
  }
})();
const s = document.getElementById("bars"),
  d = document.getElementById("cross"),
  g = document.getElementById("menu");
s.addEventListener("click", () => {
  s.classList.toggle("hidden"),
    d.classList.toggle("hidden"),
    g.classList.toggle("scale-y-0");
});
d.addEventListener("click", () => {
  d.classList.toggle("hidden"),
    s.classList.toggle("hidden"),
    g.classList.toggle("scale-y-0");
});
const y = document.querySelector(".navbar"),
  p = document.querySelectorAll(".nav-logo");
window.addEventListener("scroll", () => {
  window.scrollY > 85
    ? (y.classList.add("navbar-active"),
      p.forEach((i) => {
        i.style.color = "black";
      }))
    : (y.classList.remove("navbar-active"),
      p.forEach((i) => {
        i.style.color = "white";
      }));
});
window.addEventListener("resize", () => {
  window.innerWidth >= 768 &&
    (d.classList.add("hidden"),
    s.classList.remove("hidden"),
    g.classList.add("scale-y-0"));
});
const r = [
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
  I = document.getElementById("avatar"),
  w = document.getElementById("naam"),
  E = document.getElementById("role"),
  L = document.getElementById("review"),
  v = document.getElementById("left-btn"),
  b = document.getElementById("right-btn"),
  B = document.getElementById("surprise");
let o = 0;
const c = () => {
  (I.src = r[o].image),
    (w.innerHTML = r[o].name),
    (E.innerHTML = r[o].role),
    (L.innerHTML = r[o].r);
};
c();
v.addEventListener("click", () => {
  (o = o - 1 < 0 ? r.length - 1 : o - 1), c();
});
b.addEventListener("click", () => {
  (o = o + 1 >= r.length ? 0 : o + 1), c();
});
B.addEventListener("click", () => {
  (o = Math.floor(Math.random() * r.length)), c();
});
const a = [
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
  k = document.getElementById("blogImage"),
  M = document.getElementById("blogCaption"),
  T = document.getElementById("date"),
  O = document.getElementById("blogname"),
  S = document.getElementById("head"),
  C = document.getElementById("para");
let t = 0;
const m = () => {
    (k.src = a[t].img),
      (M.innerHTML = a[t].caption),
      (T.innerHTML = a[t].date),
      (O.innerHTML = a[t].naam),
      (S.innerHTML = a[t].heading),
      (C.innerHTML = a[t].para);
  },
  H = document.getElementById("left-btn-blog"),
  P = document.getElementById("right-btn-blog");
m();
H.addEventListener("click", () => {
  (t = t - 1 < 0 ? a.length - 1 : t - 1), m();
});
P.addEventListener("click", () => {
  (t = t + 1 >= a.length ? 0 : t + 1), m();
});
