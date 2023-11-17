(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) u(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const d of t.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && u(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function u(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = f(e);
    fetch(e.href, t);
  }
})();
const s = document.getElementById("bars"),
  a = document.getElementById("cross"),
  c = document.getElementById("menu");
s.addEventListener("click", () => {
  s.classList.toggle("hidden"),
    a.classList.toggle("hidden"),
    c.classList.toggle("scale-y-0");
});
a.addEventListener("click", () => {
  a.classList.toggle("hidden"),
    s.classList.toggle("hidden"),
    c.classList.toggle("scale-y-0");
});
const m = document.querySelector(".navbar"),
  g = document.querySelectorAll(".nav-logo");
window.addEventListener("scroll", () => {
  window.scrollY > 85
    ? (m.classList.add("navbar-active"),
      g.forEach((r) => {
        r.style.color = "black";
      }))
    : (m.classList.remove("navbar-active"),
      g.forEach((r) => {
        r.style.color = "white";
      }));
});
window.addEventListener("resize", () => {
  window.innerWidth >= 768 &&
    (a.classList.add("hidden"),
    s.classList.remove("hidden"),
    c.classList.add("scale-y-0"));
});
const n = [
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
  y = document.getElementById("avatar"),
  h = document.getElementById("naam"),
  v = document.getElementById("role"),
  p = document.getElementById("review"),
  L = document.getElementById("left-btn"),
  E = document.getElementById("right-btn"),
  w = document.getElementById("surprise");
let o = 0;
const l = () => {
  (y.src = n[o].image),
    (h.innerHTML = n[o].name),
    (v.innerHTML = n[o].role),
    (p.innerHTML = n[o].r);
};
l();
L.addEventListener("click", () => {
  (o = o - 1 < 0 ? n.length - 1 : o - 1), l();
});
E.addEventListener("click", () => {
  (o = o + 1 >= n.length ? 0 : o + 1), l();
});
w.addEventListener("click", () => {
  (o = Math.floor(Math.random() * n.length)), l();
});
