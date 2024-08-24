const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset-button");

function createGrid(squaresPerSide) {
  container.innerHTML = ""; // Clear the container
  const squareSize = 960 / squaresPerSide; // Calculate size of each square

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Hover effect with color randomization and darkening
    square.addEventListener("mouseover", () => {
      let randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
      square.style.backgroundColor = randomColor;

      let currentOpacity = parseFloat(square.style.opacity) || 0;
      square.style.opacity = currentOpacity + 0.1;
    });

    container.appendChild(square);
  }
}

resetButton.addEventListener("click", () => {
  let squaresPerSide = prompt(
    "Enter the number of squares per side (maximum 100):"
  );
  squaresPerSide = Math.min(100, Math.max(1, squaresPerSide)); // Limit input
  createGrid(squaresPerSide);
});

// Initialize with a 16x16 grid
createGrid(16);
