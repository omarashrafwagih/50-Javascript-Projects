let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let interval;

let marginLeft = 0;
let carouselImages = document.querySelector(".carousel-images");

function slide() {
  interval = setInterval(() => {
    carouselImages.style.marginLeft = marginLeft + "%";
    marginLeft = marginLeft - 100;
    if (marginLeft == -400) {
      marginLeft = 0;
    }
  }, 1500);
}
slide();

leftBtn.addEventListener("click", () => {
  if (marginLeft > -300) {
    marginLeft = marginLeft - 100;
    carouselImages.style.marginLeft = marginLeft + "%";
    clearInterval(interval);
    slide();
  } else {
    marginLeft = 0;
    carouselImages.style.marginLeft = marginLeft + "%";
    clearInterval(interval);
    slide();
  }
});

rightBtn.addEventListener("click", () => {
  if (marginLeft == 0) {
    marginLeft = -300;
    carouselImages.style.marginLeft = marginLeft + "%";
    clearInterval(interval);
    slide();
  } else {
    marginLeft = marginLeft + 100;
    carouselImages.style.marginLeft = marginLeft + "%";
    clearInterval(interval);
    slide();
  }
});
