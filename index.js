"use strict";

const navbar = document.querySelector("#navbar");
const navbar_height = navbar.getBoundingClientRect().height;

// 上に上がったらNavbarが透明になる
document.addEventListener("scroll", () => {
  if (window.scrollY > navbar_height) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// メニューを押すとメニューの領域に移動する
const navbar_menu = document.querySelector(".navbar__menu");
navbar_menu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;

  if (link === null) {
    return;
  } else {
    console.log(e.target.dataset.link);
  }

  const scrollTo = document.querySelector(link);
  if (scrollTo === null) {
    return;
  } else {
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }
});
