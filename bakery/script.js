//sidebar
const sidebar = document.querySelector(".sidebar");

const overlay = document.querySelector(".overlay");
const btnCloseMenu = document.querySelector(".close-menu");
const btnOpenMenu = document.querySelector(".show-menu");

const navLinks = document.querySelectorAll(".nav-link");

//function to open menu
const openMenu = function () {
  sidebar.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//function to close menu
const closeMenu = function () {
  sidebar.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < navLinks.length; i++)
  navLinks[i].addEventListener("click", closeMenu);

btnOpenMenu.addEventListener("click", openMenu);

btnCloseMenu.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);
