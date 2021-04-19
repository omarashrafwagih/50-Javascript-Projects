let inputValueContainer = document.querySelector(".input-value-container");
let input = document.querySelector("input");
let valueBox = document.querySelector(".value");
let mouseDown = false;
let position;

input.addEventListener("mousedown", () => {
  mouseDown = true;
});
input.addEventListener("mouseup", () => {
  mouseDown = false;
  setTimeout(() => {
    fixValue();
    inputValueContainer.style.left = position + "px";
  }, 1);
});

input.addEventListener("input", (e) => {
  valueBox.textContent = e.target.value;
  inputValueContainer.style.left = position + "px";
});

input.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    position = e.pageX - 375;
  }
});

input.addEventListener("click", (e) => {
  position = e.pageX - 375;
  inputValueContainer.style.left = position + "px";
});

function fixValue() {
  if (position > 235) {
    position = 235;
  }
  if (position < 12) {
    position = 12;
  }
}
