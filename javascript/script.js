// document
//   .querySelector(".menu-btn")
//   .addEventListener("click", () =>
//     document.querySelector(".main-menu").classList.toggle("show")
//   );

const mainMenu = document.querySelector(".main-menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  mainMenu.classList.toggle("show");
});
