let myMsg = document.querySelector(".msg");
let myKey = document.querySelector(".key");
let myWhich = document.querySelector(".which");
let myCode = document.querySelector(".code");
let myh1 = document.querySelector("h1");

function getInfo(event) {
    myMsg.classList.add("hidden");
    document.getElementsByClassName("data")[0].style.display = "block";

    let code = event.code;
    let key = event.key;
    let keyCode = event.keyCode;

    myKey.innerHTML = key;
    if (code === 'Space') {
        myKey.innerHTML = '(Space Character)'
    }

    myWhich.innerHTML = keyCode;
    myCode.innerHTML = code;
    myh1.innerHTML = keyCode;


}

document.addEventListener("keydown", getInfo);