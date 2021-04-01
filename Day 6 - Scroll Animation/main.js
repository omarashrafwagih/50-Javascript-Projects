let myContents = Array.from(document.querySelectorAll(".content"));

window.onload = function () {
  window.scrollTo(0, 0);
  myContents.forEach((content) => {
    console.log(content.innerHTML, content.offsetTop - window.scrollY);
    if (content.offsetTop - window.scrollY >= 630) {
      content.style.display = "none";
    }
  });
};
window.onscroll = function () {
  myContents.forEach((content) => {
    console.log(content.innerHTML, content.offsetTop - window.scrollY);
    if (content.offsetTop - window.scrollY <= 630) {
      content.style.display = "block";
      content.classList.add("active");
      content.classList.remove("active-reverse");
    } else {
      content.classList.remove("active");
      content.classList.add("active-reverse");
    }
  });
};
