let empties = document.querySelectorAll(".empty");
let fill = document.querySelector(".fill");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  fill.classList.add("holded");
  setTimeout(() => {
    this.className = "";
  }, 0);
}
function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}
function dragLeave() {
  this.classList.remove("hovered");
}
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
