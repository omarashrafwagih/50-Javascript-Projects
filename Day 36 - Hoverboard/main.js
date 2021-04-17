let container = document.querySelector(".container");
let inputNumber = document.querySelector("#number");
let submitBtn = document.querySelector("button");
let colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
let numberOfSquares = 500;

submitBtn.addEventListener("click", () => {
  if (container.children.length > 0) {
    container.innerHTML = "";
  }
  numberOfSquares = inputNumber.value;
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseleave", () => removeColor(square));

    container.appendChild(square);
  }

  function setColor(element) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 2px rgb(29, 29, 29)`;
  }
});
