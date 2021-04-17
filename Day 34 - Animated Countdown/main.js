let numberContainer = document.querySelector(".number-container");
let number = document.querySelector(".number");
let h4 = document.querySelector("h4");
let replayBtn = document.querySelector("button");
let count = 3;
let interval, intervalTwo;

interval = setInterval(() => {
  count--;
  number.textContent = count;
  stopInterval();
}, 1000);

function stopInterval() {
  if (count == 0) {
    clearInterval(interval);
    clearInterval(intervalTwo);
    numberContainer.style.animation = "none";
    h4.style.display = "none";
    replayBtn.style.display = "block";
  }
}

replayBtn.addEventListener("click", () => {
  count = 3;
  number.textContent = count;
  numberContainer.style.animation = "loop 1s ease-in-out infinite";
  h4.style.display = "block";
  replayBtn.style.display = "none";
  intervalTwo = setInterval(() => {
    count--;
    number.textContent = count;
    stopInterval();
  }, 1000);
});
