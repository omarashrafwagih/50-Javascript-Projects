/*

    <div class="card">
        <div class="top-image">
            <img src="./images/image.jpg" alt="Image">
        </div>
        <div class="data">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum amet,consectetur adipisicing elit amet ipsum.</p>
        </div>
        <div class="dataTwo">
            <div class="img"></div>
            <div>
                <h3>John Doe</h3>
                <span>Oct, 08 2020</span>
            </div>
        </div>
    </div>

*/

setTimeout(() => {
  // Remove Animation
  document.querySelectorAll(".animated").forEach((item) => {
    item.classList.remove("animated");
  });

  const topImage = document.querySelector(".top-image");
  topImage.style.background = "url(./images/image.jpg)";
  topImage.style.backgroundSize = "cover";

  const myH4 = document.querySelector("h4");
  myH4.textContent = "Lorem ipsum dolor sit amet";
  myH4.style.height = "auto";

  const myP = document.querySelector("p");
  myP.textContent = "Lorem ipsum amet,consectetur adipisicing elit amet ipsum";
  myP.style.height = "auto";

  const smallImage = document.querySelector(".img");
  smallImage.style.backgroundImage = "url(./images/man.jpg)";

  const myH3 = document.querySelector("h3");
  myH3.textContent = "John Doe";
  myH3.style.height = "auto";
  myH3.style.width = "auto";

  document.querySelector(".dataTwo").style.margin = "0";

  const mySpan = document.querySelector("span");
  mySpan.textContent = "Oct 08, 2020";
  mySpan.style.height = "auto";
  mySpan.style.width = "auto";
  mySpan.style.margin = "0px";
  mySpan.style.display = "auto";
}, 1500);
