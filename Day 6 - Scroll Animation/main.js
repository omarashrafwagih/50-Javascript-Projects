let myContents = Array.from(document.querySelectorAll(".content"));

window.onload = function () {
  window.scrollTo(0, 0);
};

window.onscroll = function () {
  myContents.forEach((content) => {
    if (content.offsetTop - window.scrollY <= 600) {
      content.classList.add("show");
    } else {
      content.classList.remove("show");
    }
  });
};
