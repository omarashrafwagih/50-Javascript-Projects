let numberBoxes = document.querySelectorAll(".number-box");
numberBoxes[0].focus();
let currentInput = 0;

numberBoxes.forEach((numberBox, idx) => {
  numberBox.addEventListener("keyup", (e) => {
    if (e.key == "Backspace" && idx == 0) {
      // Nothing
    }
    if (e.key == "Backspace" && idx > 0) {
      numberBoxes[idx].innerHTML = "";
      numberBoxes[idx - 1].focus();
      currentInput--;
      console.log(currentInput);
    }
    if (idx == 5) {
      numberBoxes[idx].blur();
    }
    if (e.key >= 0 && e.key <= 9 && idx < 5) {
      numberBoxes[idx + 1].focus();
      currentInput++;
      console.log(currentInput);
    }
  });
});
