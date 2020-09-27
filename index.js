"use strict";

const navbar = document.querySelector("#navbar");
const navbar_height = navbar.getBoundingClientRect().height;

// Make navbar transparent when  on the top
document.addEventListener("scroll", () => {
  if (window.scrollY > navbar_height) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
