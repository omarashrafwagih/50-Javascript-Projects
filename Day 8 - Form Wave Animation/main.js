let myTitles = Array.from(document.querySelectorAll("form p"));
let myInputs = Array.from(document.querySelectorAll("form .field input"));

myInputs[0].addEventListener("focus", () => {
  let i = 0;
  setInterval(() => {
    myTitles[0].children[i].style.top = "-15px";
    i++;
  }, 70);
});
myInputs[0].addEventListener("blur", () => {
  let i = 0;
  setInterval(() => {
    myTitles[0].children[i].style.top = "0px";
    i++;
  }, 70);
});

myInputs[1].addEventListener("focus", () => {
  let i = 0;
  setInterval(() => {
    myTitles[1].children[i].style.top = "-15px";
    i++;
  }, 70);
});
myInputs[1].addEventListener("blur", () => {
  let i = 0;
  setInterval(() => {
    myTitles[1].children[i].style.top = "0px";
    i++;
  }, 70);
});
