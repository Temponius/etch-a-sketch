const cells = 256;
const grid = document.querySelector(".sketchingGrid");

function createGrid(cells) {
  for (let i = 0; i < cells; i++) {
    const cell = document.createElement("div");
    cell.classList = "cellClass";
    cell.style.width = "33.75px";
    cell.style.height = "33.75px";
    cell.addEventListener("mouseover", function () {
      let currentOpacity = parseFloat(cell.style.opacity) || 1;
      if (currentOpacity > 0) {
        cell.style.opacity = currentOpacity - 0.1;
      }
    });
    console.log(cell.classList);
    grid.appendChild(cell);
  }
}

function resetGrid() {
  let targetCells = document.querySelectorAll(".cellClass");
  targetCells.forEach((div) => {
    div.style.opacity = 1;
  });
}

function generateNewGrid() {
  grid.innerHTML = "";
  let gridSize = prompt("Choose a new grid size (ex: 16 for a 16x16 grid)");
  let gridTotal = gridSize * gridSize;
  let newCellSize = 540 / gridSize;
  for (let i = 0; i < gridTotal; i++) {
    const cell = document.createElement("div");
    cell.classList = "cellClass";
    cell.style.width = `${newCellSize}px`;
    cell.style.height = `${newCellSize}px`;
    cell.addEventListener("mouseover", function () {
      let currentOpacity = parseFloat(cell.style.opacity) || 1;
      if (currentOpacity > 0) {
        cell.style.opacity = currentOpacity - 0.1;
      }
    });
    console.log(cell.classList);
    grid.appendChild(cell);
  }
}

createGrid(cells);
