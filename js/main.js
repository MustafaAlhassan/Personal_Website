// control the toggle-menu when clicked
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

// Change between dark and light modes
function darkToLight() {
  document.documentElement.style.setProperty("--main-color-1", "#ffffff");
  document.documentElement.style.setProperty("--main-color-2", "#f3f3f3");
  document.documentElement.style.setProperty("--main-color-3", "#0cb5a4");
  document.documentElement.style.setProperty("--main-color-4", "#58beaf");
  document.documentElement.style.setProperty("--main-color-5", "#000000");
  document.documentElement.style.setProperty("--main-color-6", "#c7c3c3");
}
function lightToDark() {
  document.documentElement.style.setProperty("--main-color-1", "#1b1f24");
  document.documentElement.style.setProperty("--main-color-2", "#000000");
  document.documentElement.style.setProperty("--main-color-3", "#12f7d6");
  document.documentElement.style.setProperty("--main-color-4", "#b6fff4");
  document.documentElement.style.setProperty("--main-color-5", "#ffffff");
  document.documentElement.style.setProperty("--main-color-6", "#7d7a7a");
}
let darkLightMode = document.querySelector(".dark-light-mode");
let lightMode = document.querySelector(".dark-light-mode .light-mode");
let darkMode = document.querySelector(".dark-light-mode .dark-mode");

let light = localStorage.getItem("light");

if (light) {
  if (light === "appear") {
    lightMode.classList.add("non-appear");
    darkMode.classList.remove("non-appear");
    darkToLight();
  } else {
    lightMode.classList.remove("non-appear");
    darkMode.classList.add("non-appear");
    lightToDark();
  }
}
darkLightMode.onclick = function (e) {
  lightMode.classList.toggle("non-appear");
  darkMode.classList.toggle("non-appear");

  if (lightMode.classList.contains("non-appear")) {
    localStorage.setItem("light", "appear");
    darkToLight();
  } else {
    localStorage.setItem("light", "non-appear");
    lightToDark();
  }
};

let portfolioImage = document.querySelectorAll(
  ".portfolio .projects .project .image"
);
let portfolioImageOverlay = document.querySelector(
  ".portfolio .projects .back-overlay"
);
let portfolioCloseBtn = document.querySelector(
  ".portfolio .projects .close-btn"
);

portfolioImage.forEach((image) => {
  image.addEventListener("click", function () {
    this.classList.add("open");
    portfolioImageOverlay.classList.add("open");
    portfolioCloseBtn.classList.add("open");
  });
});
portfolioCloseBtn.onclick = function () {
  portfolioImage.forEach((image) => {
    image.classList.remove("open");
  });
  portfolioImageOverlay.classList.remove("open");
  portfolioCloseBtn.classList.remove("open");
};

let viewMore = document.querySelector(".portfolio .view-more");
let showLess = document.querySelector(".portfolio .show-less");
let moreProjects = document.querySelector(".portfolio .more-projects");
let projects = document.querySelectorAll(".projects .project");

viewMore.onclick = function () {
  projects.forEach((project) => {
    if (project.classList.contains("non-appear")) {
      project.classList.add("appear");
    }
    project.classList.remove("non-appear");
  });
  viewMore.classList.remove("show");
  showLess.classList.add("show");
  moreProjects.classList.add("show");
};

showLess.onclick = function () {
  projects.forEach((project) => {
    if (project.classList.contains("appear")) {
      project.classList.add("non-appear");
    }
    project.classList.remove("appear");
  });
  showLess.classList.remove("show");
  viewMore.classList.add("show");
  moreProjects.classList.remove("show");
};


function scrollToSection(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

let allLinks = document.querySelectorAll(".links a");
scrollToSection(allLinks);
