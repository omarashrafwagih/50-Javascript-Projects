let playGameBtn = document.getElementById("playgame");

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
playGameBtn.addEventListener("click", () => {
  document.querySelector(".choose").style.display = "flex";
  location.href = "#choose";

  setTimeout(() => {
    document.querySelector(".hero").style.display = "none";
  }, 2000);
});
// ----------------------------------------------------------------------------------------------
let boxes = document.querySelectorAll(".box");
let selectedInsect;
let selectedInsectSRC;
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let secondsElapsed = 0;
let minutesElapsed = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    selectedInsect = box.children[1].getAttribute("alt");
    selectedInsectSRC = box.children[1].src;
    document.querySelector(".game-container").style.display = "block";
    location.href = "#game";
    setTimeout(() => {
      document.querySelector(".choose").style.height = "0";
    }, 2000);
    calculatedTimeElapsed();
    generateInsect();
  });
});

function calculatedTimeElapsed() {
  setInterval(() => {
    secondsElapsed++;
    if (secondsElapsed == 60) {
      secondsElapsed = 0;
    }
    if (secondsElapsed < 9) {
      seconds.textContent = "0" + secondsElapsed;
    }
    if (secondsElapsed >= 10) {
      seconds.textContent = secondsElapsed;
    }
  }, 1000);

  setInterval(() => {
    minutesElapsed++;
    if (minutesElapsed < 9) {
      minutes.textContent = "0" + minutesElapsed;
    }
    if (minutesElapsed >= 10) {
      minutes.textContent = minutesElapsed;
    }
  }, 60000);
}
// ----------------------------------------------------------------------------------------------
let gameArea = document.querySelector(".game-area");
let score = document.querySelector(".score");
let scoreValue = 0;

function generateInsect() {
  const insect = document.createElement("img");
  insect.classList.add("insect");
  insect.style.top = getRandomTop() + "%";
  insect.style.left = getRandomLeft() + "%";
  insect.style.transform = `rotateZ(${getRandomRotateZ()}deg)`;
  insect.src = selectedInsectSRC;

  insect.addEventListener("click", () => {
    scoreValue++;
    if (scoreValue < 9) {
      score.textContent = "0" + scoreValue;
    }
    if (scoreValue >= 10) {
      score.textContent = scoreValue;
    }
    if (scoreValue == 20) {
      document.querySelector(".overlay").style.display = "block";
    }
    insect.remove();
    setTimeout(() => {
      generateInsect();
      generateInsect();
    }, 100);
  });

  gameArea.appendChild(insect);
}

function getRandomTop() {
  return Math.floor(Math.random() * 100);
}
function getRandomLeft() {
  return Math.floor(Math.random() * 100);
}
function getRandomRotateZ() {
  return Math.floor(Math.random() * 360);
}
