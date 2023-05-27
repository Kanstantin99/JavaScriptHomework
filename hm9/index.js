let gorizont = document.getElementById("gorizont");
let vertical = document.getElementById("vertical");
const create = document.getElementById("create");
const desk = document.getElementById("desk");
const error = document.getElementById("error");

create.onclick = () => {
  gorizont = document.getElementById("gorizont").value;
  vertical = document.getElementById("vertical").value;
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
desk.addEventListener("click", function () {
  const cells = document.querySelectorAll(".cell");
  function toggleColors() {
    cells.forEach((cell) => {
      if (cell.classList.contains("white")) {
        cell.classList.remove("white");
        cell.classList.add("black");
      } else if (cell.classList.contains("black")) {
        cell.classList.remove("black");
        cell.classList.add("white");
      }
    });
  }
  cells.forEach((cell) => {
    cell.addEventListener("click", toggleColors);
  });
});
