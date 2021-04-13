let times = document.querySelector(".times");
let img = document.querySelector(".img");
let count = 0;

img.addEventListener("dblclick", (e) => {
  count++;
  times.textContent = count;
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️️";
  let x = e.clientY - img.offsetTop;
  let y = e.clientX - img.offsetLeft;
  heart.style.top = x - 18 + "px";
  heart.style.left = y - 18 + "px";

  let heart2 = document.createElement("div");
  heart2.classList.add("heart2");
  heart2.textContent = "❤️️";
  let xx = e.clientY - img.offsetTop;
  let yy = e.clientX - img.offsetLeft;
  heart2.style.top = xx - 18 + "px";
  heart2.style.left = yy - 18 + "px";

  img.appendChild(heart);
  img.appendChild(heart2);

  setTimeout(() => {
    heart.remove();
    heart2.remove();
  }, 2000);
});
