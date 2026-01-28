"use strict";

const iconHamburgerSrc = "images/bars-solid-full.svg";
const iconCloseSrc = "images/x-solid-full.svg";
const iconCircleFull = "images/circle-solid-full.svg";
const iconCircleEmpty = "images/circle-regular-full.svg";
const html = document.querySelector("html");
const body = document.querySelector("body");
const imgIcon = document.querySelector(".img-nav-icon");
const btnNav = document.querySelector(".btn-nav");
const boxNav = document.querySelector(".box-nav-links");
const imgNavHamurger = document.querySelector(".img-nav-icon");
const btnSlideLeft = document.querySelector(".btn-slide-left");
const btnSlideRight = document.querySelector(".btn-slide-right");
const allReviews = document.querySelectorAll(".review");
const allSlideDots = document.querySelectorAll(".dot-slide");
btnNav.addEventListener("click", function () {
  boxNav.classList.toggle("box-nav-active");
  imgIcon.getAttribute("src") === iconHamburgerSrc
    ? imgIcon.setAttribute("src", iconCloseSrc)
    : imgIcon.setAttribute("src", iconHamburgerSrc);
  if (boxNav.classList.contains("box-nav-active"))
    html.style.overflowY = "hidden";
  else html.style.overflowY = "scroll";
});

const goToSlide = function (current) {
  allReviews.forEach((slide, i) => {
    slide.style.transform = `translateX(${110 * (i - current)}%)`;
  });
  allSlideDots.forEach((dot, i) => {
    if (i === current) dot.setAttribute("src", iconCircleFull);
    else dot.setAttribute("src", iconCircleEmpty);
  });
};

let maxSlide = allReviews.length - 1;
let currentSlide = 0;
btnSlideLeft.addEventListener("click", function () {
  if (currentSlide === 0) currentSlide = maxSlide;
  else currentSlide--;
  goToSlide(currentSlide);
});
btnSlideRight.addEventListener("click", function () {
  if (currentSlide === maxSlide) currentSlide = 0;
  else currentSlide++;
  goToSlide(currentSlide);
});
