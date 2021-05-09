const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".nav_links");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navBar.classList.remove("nav_links");
    navBar.classList.add("nav_active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navBar.classList.remove("nav_active");
    navBar.classList.add("nav_links");
    menuOpen = false;
  }
});
