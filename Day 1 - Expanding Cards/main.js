let myImgs = Array.from(document.querySelectorAll(".card"));
let mySpans = Array.from(document.querySelectorAll("span"));

myImgs.forEach((img) => {
  img.addEventListener("click", () => {
    for (let i = 0; i < myImgs.length; i++) {
      myImgs[i].classList.remove("active");
      mySpans[i].style.display = "none";
    }
    img.classList.add("active");
    setTimeout(() => {
      img.children[0].style.display = "block";
    }, 300);
  });
});
