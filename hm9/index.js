const gorizont = document.getElementById("gorizont");
const vertical = document.getElementById("vertical");
const create = document.getElementById("create");
const desk = document.getElementById("desk");
const error = document.getElementById("error");

create.onclick = () => {
  if (isNaN(gorizont) || isNaN(vertical)) {
    error.textContent = "Please type a number";
  } else {
    error.textContent = "";
    desk.innerHTML = "";

    for (let i = 0; i < gorizont; i++) {
      const row = document.createElement("div");
      row.className = "block";
      for (let k = 0; k < vertical; k++) {
        const cell = document.createElement("div");
        if ((i + k) % 2 === 0) {
          cell.className = "cell white";
        } else {
          cell.className = "cell black";
        }
        row.appendChild(cell);
      }
      desk.appendChild(row);
    }
  }
};

desk.addEventListener("click", function (event) {
  const cell = event.target.closest(".cell");
  if (cell) {
    cell.classList.toggle("white");
    cell.classList.toggle("black");
  }
});
