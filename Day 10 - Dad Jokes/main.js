let myBtn = document.querySelector(".btn");
let joke = document.querySelector(".joke");

generateJoke();
myBtn.addEventListener('click', generateJoke)

// 1st Method

// function generateJoke() {
//     let config = {
//         headers: {
//             "Accept": "application/json",
//         },
//     };

//     fetch("https://icanhazdadjoke.com", config)
//         .then((response) => response.json())
//         .then((data) => joke.innerHTML = data.joke);
// }

// 2nd Method

async function generateJoke() {
    let config = {
        headers: {
            "Accept": "application/json",
        },
    };
    let response = await fetch("https://icanhazdadjoke.com", config);
    let data = await response.json();
    joke.innerHTML = data.joke;

}