let myP = document.querySelector("p");
let speedInput = document.querySelector("input");
let text = "We Love Programming !!";
let position = 1;
let speed = 300 / speedInput.value;
let interval;

speedInput.onchange = function () {
  speed = 300 / speedInput.value;
  clearInterval(interval);
  textSlice();
};

function textSlice() {
  interval = setInterval(() => {
    if (position <= text.length) {
      myP.textContent = text.slice(0, position);
      position++;
    } else {
      position = 0;
    }
  }, speed);
}
textSlice();
