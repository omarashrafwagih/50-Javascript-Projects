let good = document.querySelector(".good");
let cheap = document.querySelector(".cheap");
let fast = document.querySelector(".fast");

good.addEventListener("click", () => {
  if (good.classList.contains("on")) {
    good.classList.remove("on");
    good.parentElement.classList.remove("on");
  } else if (cheap.classList.contains("on") && fast.classList.contains("on")) {
    good.classList.add("on");
    good.parentElement.classList.add("on");
    fast.classList.remove("on");
    fast.parentElement.classList.remove("on");
  } else {
    good.classList.add("on");
    good.parentElement.classList.add("on");
  }
});

cheap.addEventListener("click", () => {
  if (cheap.classList.contains("on")) {
    cheap.classList.remove("on");
    cheap.parentElement.classList.remove("on");
  } else if (good.classList.contains("on") && fast.classList.contains("on")) {
    cheap.classList.add("on");
    cheap.parentElement.classList.add("on");
    good.classList.remove("on");
    good.parentElement.classList.remove("on");
  } else {
    cheap.classList.add("on");
    cheap.parentElement.classList.add("on");
  }
});

fast.addEventListener("click", () => {
  if (fast.classList.contains("on")) {
    fast.classList.remove("on");
    fast.parentElement.classList.remove("on");
  } else if (good.classList.contains("on") && cheap.classList.contains("on")) {
    fast.classList.add("on");
    fast.parentElement.classList.add("on");
    cheap.classList.remove("on");
    cheap.parentElement.classList.remove("on");
  } else {
    fast.classList.add("on");
    fast.parentElement.classList.add("on");
  }
});
