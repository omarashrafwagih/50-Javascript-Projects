let notificationTypes = ["red", "orange", "green", "rebeccapurple"];
let notificationTexts = ["Notification Danger", "Notification Carefull", "Notification Success", "Notification Normal"];
let notificationArea = document.querySelector(".notification-area");
let myAudio = document.querySelector("audio");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * notificationTypes.length);
  let notification = document.createElement("div");
  notification.classList.add("notification");
  notification.classList.add(notificationTypes[randomNumber]);
  notification.textContent = notificationTexts[randomNumber];
  notificationArea.appendChild(notification);
  console.log(randomNumber);
  myAudio.play();
  myAudio.currentTime = 0;

  setTimeout(() => {
    notification.remove();
  }, 3000);
});
