let form = document.getElementById("form");
let moviesContainer = document.querySelector(".movies-container");
let POPULAR_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=196655224b3657bed842af6a5ccfe2c4";
let SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=196655224b3657bed842af6a5ccfe2c4&query=";
let IMG_PATH = "https://image.tmdb.org/t/p/w500";

fetch(POPULAR_API)
  .then((res) => res.json())
  .then((data) => {
    let results = data.results;
    results.forEach((result) => {
      let { title, overview, poster_path, vote_average } = result;
      let movie = document.createElement("div");
      movie.classList.add("movie");
      movie.innerHTML = `
        <div class="poster">
            <img src="${IMG_PATH + poster_path}" alt="${title}">
        </div>
        <div class="info">
            <h4 class="title">${title}</h4>
            <h6 class="rating ${ratingColor(vote_average)}">${vote_average}</h6>
        </div>
        <div class="overview">
            <h6>Description</h6>
            <p class="overview-text">${overview}</p>
        </div>
      `;
      moviesContainer.appendChild(movie);
    });
  });

function ratingColor(vote_average) {
  if (vote_average >= 8) {
    return "green";
  } else if (vote_average >= 5.5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  moviesContainer.innerHTML = "";

  if (form.children[0].value == "") {
    window.location.reload();
  } else {
    fetch(SEARCH_API + '"' + form.children[0].value + '"')
      .then((res) => res.json())
      .then((data) => {
        let results = data.results;
        results.forEach((result) => {
          let { title, overview, poster_path, vote_average } = result;
          let movie = document.createElement("div");
          movie.classList.add("movie");
          movie.innerHTML = `
        <div class="poster">
            <img src="${IMG_PATH + poster_path}" alt="${title}">
        </div>
        <div class="info">
            <h4 class="title">${title}</h4>
            <h6 class="rating ${ratingColor(vote_average)}">${vote_average}</h6>
        </div>
        <div class="overview">
            <h6>Description</h6>
            <p class="overview-text">${overview}</p>
        </div>
      `;
          moviesContainer.appendChild(movie);
        });
      });
  }
});
