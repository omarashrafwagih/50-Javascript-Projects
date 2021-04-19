let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let rates = document.querySelectorAll(".rate");
let button = document.querySelector("button");
let rate = "";

boxes.forEach((box, idx) => {
  box.addEventListener("click", () => {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("selected-box");
      rate = "";
    }
    box.classList.add("selected-box");
    rate = rates[idx].textContent;
  });
});

button.addEventListener("click", () => {
  if (rate != "") {
    container.innerHTML = "";
    container.innerHTML = `
    <p style='font-size:40px;margin-bottom:0px'>❤️</p>
    <p>Thank You</p>
    <p>Feedback: ${rate}</p>
    <p>We Will Use Your Feedback To Improve Our Customer Support</p>
    `;
  }
});
