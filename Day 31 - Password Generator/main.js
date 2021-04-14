let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = `!@#$%^&*_+=`;

let lowerCaseLetter = "",
  upperCaseLetter = "",
  number = "",
  symbol = "",
  passwordLength = "";

let passwordArea = document.querySelector(".password");
let copyBTN = document.querySelector(".copy");

let passwordLengthInput = document.querySelector("#length");
let lowercaseCheckBox = document.querySelector("#lowercase");
let uppercaseCheckBox = document.querySelector("#uppercase");
let numberCheckBox = document.querySelector("#number");
let symbolCheckBox = document.querySelector("#symbol");

let generateBTN = document.querySelector("button");

// -------------------- JUST FOR TRY
/*

uppercaseCheckBox.onchange = function () {
  console.log(uppercaseCheckBox.checked);
};

*/
// -------------------- JUST FOR TRY

function getLowerCaseLetter() {
  lowerCaseLetter += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
}
function getUpperCaseLetter() {
  upperCaseLetter += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}
function getNumber() {
  number += numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  symbol += symbols[Math.floor(Math.random() * symbols.length)];
}

generateBTN.addEventListener("click", () => {
  lowerCaseLetter = "";
  upperCaseLetter = "";
  number = "";
  symbol = "";
  passwordLength = "";
  passwordLength = passwordLengthInput.value;
  if (lowercaseCheckBox.checked || uppercaseCheckBox.checked || numberCheckBox.checked || symbolCheckBox.checked) {
    generatePassword();
  } else {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = "You Have To Select At Least One Checkbox";
    document.querySelector(".notification-area").appendChild(notification);
    document.querySelector("#error").play();
    document.querySelector("#error").volume = 0.5;
    document.querySelector("#error").currentTime = 0;
    setTimeout(() => {
      notification.remove();
    }, 2000);
  }
});

function generatePassword() {
  while (passwordLength > 0) {
    if (passwordLength > 0 && lowercaseCheckBox.checked) {
      getLowerCaseLetter();
      passwordLength--;
    }
    if (passwordLength > 0 && uppercaseCheckBox.checked) {
      getUpperCaseLetter();
      passwordLength--;
    }
    if (passwordLength > 0 && numberCheckBox.checked) {
      getNumber();
      passwordLength--;
    }
    if (passwordLength > 0 && symbolCheckBox.checked) {
      getSymbol();
      passwordLength--;
    }
  }
  if (passwordLength <= 0) {
    let newPassword = lowerCaseLetter + upperCaseLetter + number + symbol;
    shuffleNewPassword(newPassword);
  }
}

function shuffleNewPassword(thePassword) {
  thePassword = [...thePassword];
  var currentIndex = thePassword.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = thePassword[currentIndex];
    thePassword[currentIndex] = thePassword[randomIndex];
    thePassword[randomIndex] = temporaryValue;
  }

  passwordArea.textContent = thePassword.join("");
}

copyBTN.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passwordArea.textContent;
  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();

  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = "Password Copied To Clipboard";
  document.querySelector(".notification-area").appendChild(notification);
  document.querySelector("#copy").play();
  document.querySelector("#copy").volume = 0.5;
  document.querySelector("#copy").currentTime = 0;
  setTimeout(() => {
    notification.remove();
  }, 2000);
});
