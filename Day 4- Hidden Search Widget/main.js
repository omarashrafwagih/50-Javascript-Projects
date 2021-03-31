let searchIcon = document.querySelector("i");
let myInput = document.querySelector("input");

searchIcon.addEventListener("click", () => {
  myInput.classList.toggle("active");
  myInput.focus();

  searchIcon.classList.toggle("fa-search");
  searchIcon.classList.toggle("fa-times");
  myInput.value = "";
});
