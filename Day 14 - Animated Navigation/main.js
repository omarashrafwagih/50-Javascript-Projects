let menu = document.querySelector(".menu");
let box = document.querySelector(".box");
let links = document.querySelectorAll("a");

box.addEventListener("click", () => {
  menu.classList.toggle("active");
  links.forEach((link) => {
    link.classList.toggle("active");
  });
  box.children[0].classList.toggle("active");
  box.children[1].classList.toggle("active");
});
