let count = 0;
let numberDivs = Array.from(document.querySelectorAll(".number"));
let lineDivs = Array.from(document.querySelectorAll(".line"));
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

checkNext();
checkPrev();

nextBtn.addEventListener("click", () => {
  if (count < lineDivs.length) {
    lineDivs[count].classList.add("active");
    numberDivs[count + 1].classList.add("active");
    count++;
    checkNext();
    checkPrev();
  }
});

prevBtn.addEventListener("click", () => {
  if (count > 0) {
    lineDivs[count - 1].classList.remove("active");
    numberDivs[count].classList.remove("active");
    count--;
    checkNext();
    checkPrev();
  }
});

function checkNext() {
  if (count == 3) {
    nextBtn.classList.add("active");
  } else {
    nextBtn.classList.remove("active");
  }
}
function checkPrev() {
  if (count == 0) {
    prevBtn.classList.add("active");
  } else {
    prevBtn.classList.remove("active");
  }
}
