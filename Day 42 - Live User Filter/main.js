let result = document.getElementById("result");
let filter = document.getElementById("filter");
filter.focus();
let listItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  let res = await fetch("https://randomuser.me/api?results=50");

  let { results } = await res.json();

  // Clear result
  result.innerHTML = "";

  results.forEach((user) => {
    let li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
