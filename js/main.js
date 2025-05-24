let links = document.querySelector(".landing-page header .links");
let overlay = document.querySelector(".overlay");
let myCV = document.querySelector(".landing-page header .my-cv");
let toggleMenu = document.querySelector(".landing-page header .toggle-menu");
let toggleClose = document.querySelector(".landing-page header .links .close");

toggleMenu.onclick = function (e) {
  links.classList.add("open");
  overlay.classList.add("open");
  myCV.classList.add("open");
};
toggleClose.onclick = function (e) {
  links.classList.remove("open");
  overlay.classList.remove("open");
  myCV.classList.remove("open");
};
