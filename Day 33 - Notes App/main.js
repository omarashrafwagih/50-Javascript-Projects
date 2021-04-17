let addBtn = document.querySelector(".add");
let allNotesDiv = document.querySelector(".notes");
let allTexts;
let data;
let deleteAllBtn = document.querySelector(".remove");
deleteAllBtn.addEventListener("click", () => {
  localStorage.clear();
  allNotesDiv.innerHTML = "";
});

addBtn.addEventListener("click", addNote);

window.addEventListener("load", () => {
  if (localStorage.length) {
    data = localStorage.getItem("texts");
    data = data.split(",");
    for (let i = 0; i < data.length; i++) {
      addNote();
      let textareas;
      textareas = document.querySelectorAll("textarea");
      textareas[i].value = data[i];
      textareas[i].setAttribute("disabled", "true");
    }
  }
});

function addNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
      <div class="tools">
          <i class="fas fa-pencil-alt"></i>
          <i class="far fa-trash-alt"></i>
      </div>
      <textarea id="textarea"></textarea>
    `;

  let textarea = note.querySelector("textarea");
  let editBtn = note.querySelector(".fa-pencil-alt");
  let deleteBtn = note.querySelector(".fa-trash-alt");

  editBtn.addEventListener("click", () => {
    if (textarea.hasAttribute("disabled")) {
      textarea.removeAttribute("disabled");
    } else {
      textarea.setAttribute("disabled", "true");
    }
  });

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLocalStorage();
  });
  allNotesDiv.appendChild(note);

  textarea.addEventListener("input", (e) => {
    updateLocalStorage();
  });
}

function updateLocalStorage() {
  let allTextAreas = document.querySelectorAll("textarea");
  allTexts = [];

  for (let i = 0; i < allTextAreas.length; i++) {
    allTexts.push(allTextAreas[i].value);
  }

  localStorage.setItem("texts", allTexts);
}
