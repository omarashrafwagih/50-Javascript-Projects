let modeElement = document.querySelector(".mode").children[0];
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let pmOrAm = document.querySelector(".pm-or-am");
let weekDay = document.querySelector(".week-day");
let month = document.querySelector(".month");
let dayNumber = document.querySelector(".day-number");
let needleHour = document.querySelector(".needle-hour");
let needleMinute = document.querySelector(".needle-minute");
let needleSecond = document.querySelector(".needle-second");
let soundElement = document.querySelector(".sound").children[0];
let myAduio = document.querySelector("audio");
let audioOn = false;

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

modeElement.addEventListener("click", () => {
  modeElement.classList.toggle("fa-moon");
  modeElement.classList.toggle("fa-sun");
  modeElement.parentElement.classList.toggle("dark");
  document.body.classList.toggle("dark");
  dayNumber.classList.toggle("dark");
  hour.parentElement.classList.toggle("dark");
  needleHour.classList.toggle("dark");
  needleMinute.classList.toggle("dark");
  needleSecond.parentElement.classList.toggle("dark");
  needleSecond.parentElement.children[3].classList.toggle("dark");
  soundElement.parentElement.classList.toggle("dark");
});

soundElement.parentElement.addEventListener("click", () => {
  soundElement.classList.toggle("fa-volume-up");
  soundElement.classList.toggle("fa-volume-off");
  if (audioOn) {
    audioOn = false;
  } else {
    audioOn = true;
  }
});

setInterval(() => {
  let myDate = new Date();
  hour.textContent = myDate.getHours();
  if (parseInt(hour.textContent) > 12) {
    pmOrAm.textContent = "PM";
  } else {
    pmOrAm.textContent = "AM";
  }
  if (parseInt(hour.textContent) < 10) {
    hour.textContent = `0${myDate.getHours()}`;
  }
  minute.textContent = myDate.getMinutes();
  if (parseInt(minute.textContent) < 10) {
    minute.textContent = `0${parseInt(minute.textContent)}`;
  }
  second.textContent = myDate.getSeconds();
  if (parseInt(second.textContent) < 10) {
    second.textContent = `0${parseInt(second.textContent)}`;
  }

  if (audioOn) {
    myAduio.play();
    myAduio.volume = 0.1;
  }
  weekDay.textContent = dayNames[myDate.getDay()] + ",";
  month.textContent = monthNames[myDate.getMonth()] + ",";
  dayNumber.textContent = myDate.getDate();
}, 1000);

setInterval(() => {
  let myDate = new Date();
  needleHour.style.transform = `translate(-50%, -100%) rotate(${myDate.getHours() * 30}deg)`;
  needleMinute.style.transform = `translate(-50%, -100%) rotate(${myDate.getMinutes() * 6}deg)`;
  needleSecond.style.transform = `translate(-50%, -100%) rotate(${myDate.getSeconds() * 6}deg)`;
}, 1000);
