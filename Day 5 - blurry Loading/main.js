let mySection = document.querySelector("section");
let overlay = document.querySelector(".overlay");
let loadingPercentage = document.querySelector(".loading-num");

let percentage = 0;
let blur = 50;
let opacity = 1;

window.addEventListener("load", () => {
  setInterval(() => {
    if (percentage <= 100) {
      loadingPercentage.innerHTML = `${percentage}%`;
      percentage++;
      overlay.style.opacity = `${opacity}`;
      opacity = opacity - 0.008;
      blurDown();
    }
    if (percentage >= 100) {
      overlay.style.display = "none";
      loadingPercentage.style.display = "none";
    }
  }, 25);
});

function blurDown() {
  mySection.style.filter = `blur(${blur}px)`;
  blur = blur - 0.5;
}
