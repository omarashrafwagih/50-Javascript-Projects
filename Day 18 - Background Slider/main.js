let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let slide = document.querySelector(".slide");
let slideNumber = 1;

setBG();
function setBG() {
  document.body.style.backgroundImage = `url(./images/${slideNumber}.jpg)`;
  slide.style.backgroundImage = `url(./images/${slideNumber}.jpg)`;
}

leftArrow.addEventListener("click", () => {
  if (slideNumber <= 1) {
    slideNumber = 5;
  } else {
    slideNumber--;
  }
  setBG();
});

rightArrow.addEventListener("click", () => {
  if (slideNumber >= 5) {
    slideNumber = 1;
  } else {
    slideNumber++;
  }
  setBG();
});
