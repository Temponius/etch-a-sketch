const cells = 256;
const grid = document.querySelector(".sketchingGrid");

function createGrid(cells) {
  for (let i = 0; i < cells; i++) {
    const cell = document.createElement("div");
    cell.classList = "cellClass";
    cell.addEventListener("mouseover", function () {
      cell.classList.add("touched");
    });
    console.log(cell.classList);
    grid.appendChild(cell);
  }
}

function resetGrid() {
  let targetCells = document.getElementsByClassName("cellClass");
  console.log("Hello!");
  targetCells.forEach((div) => {
    div.classList.remove("touched");
  });
}
createGrid(cells);
