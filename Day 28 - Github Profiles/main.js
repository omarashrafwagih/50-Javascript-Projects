let APIURL = "https://api.github.com/users/";
let form = document.querySelector("form");
let search = document.querySelector("#search");
// ---------------------------------------------------------------------------------

let profile = document.querySelector(".profile");
let img = document.querySelector("img");
let h2 = document.querySelector("h2");
let anchor = document.querySelector("a");
let datathree = document.querySelector(".datathree");
let bioText = document.querySelector("p");
let h5s = document.querySelectorAll("h5");
let reposDiv = document.querySelector(".repos");
let errorDiv = document.querySelector(".error");

// ---------------------------------------------------------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  reposDiv.innerHTML = "";
  let user = search.value;
  search.value = "";
  getProfile(user);
  getRepos(user);
});

function getProfile(userName) {
  fetch(APIURL + userName)
    .then((res) => res.json())
    .then((data) => {
      let { avatar_url, bio, login, name, hireable, html_url, following, followers, company, public_repos } = data;

      if (name) {
        errorDiv.style.display = "none";
        profile.style.display = "block";
        img.setAttribute("src", avatar_url);
        img.setAttribute("alt", name);

        h2.textContent = name;

        anchor.textContent = html_url;
        anchor.setAttribute("href", html_url);

        datathree.children[0].textContent = "@" + login;
        datathree.children[1].textContent = "Company: " + company;
        datathree.children[2].textContent = "Hireable: " + hireable;

        bioText.textContent = bio;

        h5s[0].textContent = following + " Following";
        h5s[1].textContent = followers + " Followers";
        h5s[2].textContent = public_repos + " Repos";
      } else {
        errorDiv.style.display = "block";
        profile.style.display = "none";
      }
    });
}

function getRepos(userName) {
  fetch(APIURL + userName + "/repos")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let repo = document.createElement("div");
        repo.classList.add("repo");
        repo.textContent = data[i].name;
        reposDiv.appendChild(repo);
      }
    });
}
