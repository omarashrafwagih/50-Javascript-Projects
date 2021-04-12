let nav = document.querySelector("nav");
let navSpan = document.querySelector("nav span");
let navUl = document.querySelector("nav ul");

window.addEventListener("scroll", () => {
  if (window.scrollY >= nav.offsetHeight + 300) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
