let menuBtn = document.querySelector(".btn-menu");
let nav = document.querySelector("nav");
let sections = Array.from(document.querySelectorAll("section"));
let anchors = Array.from(document.querySelectorAll("a"));

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("active");
  sections.forEach((section) => {
    section.classList.toggle("active");
  });
});

anchors.forEach((anchor) => {
  anchor.onclick = () => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("active");
    sections.forEach((section) => {
      section.classList.toggle("active");
    });
  };
});
