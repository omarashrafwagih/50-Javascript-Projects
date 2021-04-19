let menuBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-times");
let nav = document.querySelector("nav");
let gray = document.querySelector(".gray");
let red = document.querySelector(".red");
let white = document.querySelector(".white");

menuBtn.addEventListener("click", () => {
  gray.style.transitionDelay = "200ms";
  red.style.transitionDelay = "400ms";
  white.style.transitionDelay = "600ms";
  nav.style.width = "300px";
  menuBtn.style.display = "none";
  gray.style.width = "100%";
  red.style.width = "95%";
  white.style.width = "95%";
});

closeBtn.addEventListener("click", () => {
  gray.style.transitionDelay = "600ms";
  red.style.transitionDelay = "400ms";
  white.style.transitionDelay = "200ms";

  gray.style.width = "0%";
  red.style.width = "0%";
  white.style.width = "0%";
  menuBtn.style.display = "block";

  setTimeout(() => {
    nav.style.width = "0%";
  }, 650);
});
