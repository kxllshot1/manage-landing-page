"use strict";

const body = document.querySelector("body");
const imgIcon = document.querySelector(".img-nav-icon");
const iconHamburgerSrc = "images/bars-solid-full.svg";
const iconCloseSrc = "images/x-solid-full.svg";
const btnNav = document.querySelector(".btn-nav");
const boxNav = document.querySelector(".box-nav-links");
const imgNavHamurger = document.querySelector(".img-nav-icon");
btnNav.addEventListener("click", function () {
  boxNav.classList.toggle("box-nav-active");
  imgIcon.getAttribute("src") === iconHamburgerSrc
    ? imgIcon.setAttribute("src", iconCloseSrc)
    : imgIcon.setAttribute("src", iconHamburgerSrc);
  body.style.overflowY === "scroll" ? "hidden" : "scroll";
});
