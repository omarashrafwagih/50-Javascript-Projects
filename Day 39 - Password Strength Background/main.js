let passwordInput = document.querySelector("#password");
let bg = document.querySelector(".bg");

passwordInput.addEventListener("input", (e) => {
  let PasswordLength = e.target.value.length;
  let blurValue = 20 - PasswordLength * 2;
  let grayscaleValue = 5 - PasswordLength * 0.5;
  bg.style.filter = `blur(${blurValue}px) grayscale(${grayscaleValue})`;
});
