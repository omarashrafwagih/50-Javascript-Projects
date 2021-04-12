let upBtn = document.querySelector(".up-btn");
let downBtn = document.querySelector(".down-btn");

let images = document.querySelector(".images");
let info = document.querySelector(".info");

let positionTopRight = 0;
let positionTopLeft = -300;

upBtn.addEventListener("click", () => {
  positionTopRight -= 100;
  positionTopLeft += 100;
  if (positionTopRight <= -400) {
    positionTopRight = 0;
    positionTopLeft = -300;
  }
  images.style.top = positionTopRight + "%";
  info.style.top = positionTopLeft + "%";
});

downBtn.addEventListener("click", () => {
  positionTopRight -= 100;
  positionTopLeft += 100;
  if (positionTopRight <= -400) {
    positionTopRight = 0;
    positionTopLeft = -300;
  }
  images.style.top = positionTopRight + "%";
  info.style.top = positionTopLeft + "%";
});
