const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");
// const CloseMenuButton = document.querySelector('.navbar');

menuButton.addEventListener("click", function () {
  menu.classList.toggle("active-m");
});
// CloseMenuButton.addEventListener("click", (event) => {
//   menu.classList.toggle("is-open");
// });