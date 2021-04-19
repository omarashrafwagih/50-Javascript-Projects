let container = document.querySelector(".images-container");
let randomImgUrl = "https://source.unsplash.com/random/";
let numberOfImages = 15;

for (let i = 0; i < numberOfImages; i++) {
  let img = document.createElement("img");
  img.src = `${randomImgUrl}${getRandomSize()}`;

  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
