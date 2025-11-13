const cells = 256;
const grid = document.querySelector(".sketchingGrid");

function createGrid(cells) {
  for (let i = 0; i < cells; i++) {
    const cell = document.createElement("div");
    cell.className = "cellClass";
    grid.appendChild(cell);
  }
}

createGrid(cells);
