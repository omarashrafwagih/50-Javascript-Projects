let myTitles = Array.from(document.querySelectorAll("form p"));
let myInputs = Array.from(document.querySelectorAll("form .field input"));

myInputs[0].addEventListener("focus", () => {
  let i = 0;
  setInterval(() => {
    if (i < myTitles[0].children.length) {
      myTitles[0].classList.add('active');
      myInputs[0].classList.add('active');
      myTitles[0].children[i].style.top = "-15px";
      i++;
    }

  }, 70);
});






myInputs[0].addEventListener("blur", () => {
  let i = 0;

  if (myInputs[0].value === "") {
    setInterval(() => {
      if (i < myTitles[0].children.length) {
        myTitles[0].classList.remove('active');
        myInputs[0].classList.remove('active');
        myTitles[0].children[i].style.top = "0px";
        i++;
      }
    }, 70);
  }

});







myInputs[1].addEventListener("focus", () => {
  let i = 0;
  setInterval(() => {
    if (i < myTitles[1].children.length) {
      myTitles[1].classList.add('active');
      myInputs[1].classList.add('active');
      myTitles[1].children[i].style.top = "-15px";
      i++;
    }
  }, 70);
});










myInputs[1].addEventListener("blur", () => {
  let i = 0;
  if (myInputs[1].value === "") {
    setInterval(() => {
      if (i < myTitles[1].children.length) {
        myTitles[1].classList.remove('active');
        myInputs[1].classList.remove('active');
        myTitles[1].children[i].style.top = "0px";
        i++;
      }
    }, 70);
  }
});



