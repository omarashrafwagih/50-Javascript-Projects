let textarea = document.querySelector("textarea");
let text = "";
let arrayText = [];
let choicesDiv = document.querySelector(".choices");

textarea.addEventListener("keyup", () => {
  text = textarea.value;
  arrayText = text.split(",");

  let mySet = new Set(arrayText);
  arrayText = [...mySet];

  choicesDiv.innerHTML = "";
  createChoices();
});

function createChoices() {
  arrayText.forEach((elem) => {
    let choice = document.createElement("div");
    choice.classList.add("choice");
    choice.textContent = elem;
    choicesDiv.appendChild(choice);
  });
}

textarea.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    textarea.disabled = true;
    textarea.value = "";

    let intervalCode = setInterval(() => {
      let randomNum = null;
      randomNum = Math.floor(Math.random() * choicesDiv.children.length);
      for (let i = 0; i < choicesDiv.children.length; i++) {
        choicesDiv.children[i].classList.remove("active");
      }
      choicesDiv.children[randomNum].classList.add("active");
    }, 100);

    setTimeout(() => {
      clearInterval(intervalCode);
      textarea.disabled = false;
    }, 3000);
  }
});

document.querySelector(".refresh").onclick = function () {
  textarea.value = "";
  choicesDiv.innerHTML = "";
};
