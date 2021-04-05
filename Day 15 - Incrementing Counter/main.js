let twitterNum = document.querySelector(".twitter");
let youtubeNum = document.querySelector(".youtube");
let facebookNum = document.querySelector(".facebook");
let twitterInterval, youtubeInterval, facebookInterval;
let duration = 3;

window.addEventListener("load", () => {
  twitterInterval = setInterval(() => {
    twitterNum.textContent = parseInt(twitterNum.textContent) + 1;
    if (parseInt(twitterNum.innerHTML) >= 781) {
      clearInterval(twitterInterval);
    }
  }, duration);

  youtubeInterval = setInterval(() => {
    youtubeNum.textContent = parseInt(youtubeNum.textContent) + 1;
    if (parseInt(youtubeNum.innerHTML) >= 1200) {
      clearInterval(youtubeInterval);
    }
  }, duration);

  facebookInterval = setInterval(() => {
    facebookNum.textContent = parseInt(facebookNum.textContent) + 1;
    if (parseInt(facebookNum.innerHTML) >= 1287) {
      clearInterval(facebookInterval);
    }
  }, duration);
});
