let answers = document.querySelectorAll(".answer");
let downBtns = Array.from(document.querySelectorAll("i"));
let i = 0;

downBtns.forEach((downBtn) => {
  downBtn.addEventListener("click", () => {
    downBtn.classList.toggle("fa-chevron-down");
    downBtn.classList.toggle("fa-times-circle");
    checker();
  });
});

function checker() {
  for (i = 0; i < answers.length; i++) {
    if (downBtns[i].classList.contains("fa-times-circle")) {
      answers[i].style.display = "block";
      document.querySelectorAll(".question-box")[i].style.background = `5% center / contain no-repeat url("./imgs/chaticon.png") aliceblue`;
    } else if (downBtns[i].classList.contains("fa-chevron-down")) {
      answers[i].style.display = "none";
      document.querySelectorAll(".question-box")[i].style.background = `aliceblue`;
    }
  }
}
