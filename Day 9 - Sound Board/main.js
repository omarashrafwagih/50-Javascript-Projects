let sounds = ["applause", "boo", "gasp", "tada", "winner", "wrong"];
let myAudios = document.querySelectorAll("audio");

sounds.forEach((sound) => {
  let soundDiv = document.createElement("div");
  soundDiv.innerHTML = sound;
  soundDiv.classList.add("sound");
  document.body.appendChild(soundDiv);
});

let soundBtns = Array.from(document.getElementsByClassName("sound"));

soundBtns.forEach((soundBtn, index) => {
  soundBtn.onclick = function () {
    for (let i = 0; i < soundBtns.length; i++) {
      myAudios[i].pause();
      myAudios[i].currentTime = 0;
    }
    myAudios[index].play();
  };
});
