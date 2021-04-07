let bigGlass = document.querySelector(".big-glass");
let numberOfLiterRemaining = document.querySelector(".big-glass p");
let overlay = document.querySelector(".overlay");
let glasses = Array.from(document.querySelectorAll(".glass"));
let glassesSpans = Array.from(document.querySelectorAll(".glass span"));
let dataNumber = 0;

glasses.forEach((glass) => {
  glass.addEventListener("click", () => {
    dataNumber = glass.getAttribute("data-number");

    if (glass.classList.contains("active")) {
      for (let i = 0; i < glasses.length; i++) {
        glasses[i].classList.remove("active");
        glassesSpans[i].classList.remove("active");
      }
      for (let ii = 0; ii < dataNumber; ii++) {
        glasses[ii].classList.add("active");
        glassesSpans[ii].classList.add("active");
      }
      updateBigGlass();
    } else {
      for (let ii = 0; ii < dataNumber; ii++) {
        glasses[ii].classList.add("active");
        glassesSpans[ii].classList.add("active");
      }
      updateBigGlass();
    }
  });
});

function updateBigGlass() {
  let litersDrinked = dataNumber * 0.25;
  let litersRemaining = 2 - litersDrinked;
  let heightToBe = dataNumber * 12.5 + 0.4;

  numberOfLiterRemaining.innerHTML = `${litersRemaining}<span>L <br>Remaining</span>`;
  overlay.style.height = `${heightToBe}%`;
  document.querySelector(".drinked").innerHTML = `${dataNumber * 0.25}L Drinked`;

  if (litersDrinked == 2) {
    let myInterval = setInterval(() => {
      let drop = document.createElement("img");
      drop.setAttribute("src", "./images/drop.svg");
      dropLeft = Math.ceil(Math.random() * 100);
      dropLeft = dropLeft + "%";
      drop.style.left = dropLeft;
      document.body.appendChild(drop);
      setTimeout(() => {
        clearInterval(myInterval);
        let allDrops = document.querySelectorAll("img");
        allDrops.forEach((droplit) => {
          droplit.remove();
        });
      }, 5000);
    }, 100);
  }
}
