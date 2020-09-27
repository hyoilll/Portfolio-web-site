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

  if (link === undefined) {
    return;
  } else {
    scrollIntoView(link);
  }
});

// Contact me Btnを押すとContactMe領域に移動
const contact_btn = document.querySelector(".home__contact");
contact_btn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// home領域透明化
const home = document.querySelector(".content");
const home_height = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  const opacity = 1 - scrollY / home_height;

  home.style.opacity = opacity;
});

// Arrow Btn show
const arrow = document.querySelector(".arrow-icon");
document.addEventListener("scroll", () => {
  if (scrollY > home_height * 0.7) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
});

// Arrow Btn func
arrow.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Projects
const workBtn = document.querySelector(".work__categories");
const projects = document.querySelectorAll(".project");
workBtn.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  if (filter === undefined) {
    return;
  }

  const projectContainer = document.querySelector(".work__projects");
  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((p) => {
      if (p.dataset.filter === filter || filter === "*") {
        p.classList.remove("visible");
      } else {
        p.classList.add("visible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
};
