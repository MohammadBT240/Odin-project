// Knight’s move deltas
const deltas = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

function inBounds([x, y]) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// BFS to find shortest path
function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1]) return [start];
  const queue = [start];
  const visited = new Set([start.join(",")]);
  const parent = new Map();

  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (const [dx, dy] of deltas) {
      const next = [cx + dx, cy + dy];
      const key = next.join(",");
      if (!inBounds(next) || visited.has(key)) continue;
      visited.add(key);
      parent.set(key, [cx, cy]);
      if (next[0] === end[0] && next[1] === end[1]) {
        // reconstruct path
        const path = [next];
        let step = next.join(",");
        while (step !== start.join(",")) {
          const [px, py] = parent.get(step);
          path.push([px, py]);
          step = [px, py].join(",");
        }
        return path.reverse();
      }
      queue.push(next);
    }
  }
  return [];
}

// UI state
let start = null;
let end = null;

const boardEl = document.getElementById("board");
const outputEl = document.getElementById("output");
const resetBtn = document.getElementById("resetBtn");

// Build the 8×8 board
for (let y = 7; y >= 0; y--) {
  for (let x = 0; x < 8; x++) {
    const sq = document.createElement("div");
    sq.id = `sq-${x}-${y}`;
    sq.className = `square ${(x + y) % 2 ? "dark" : "light"}`;
    sq.addEventListener("click", () => onSquareClick(x, y));
    boardEl.appendChild(sq);
  }
}

function onSquareClick(x, y) {
  const id = `sq-${x}-${y}`;
  const el = document.getElementById(id);
  if (!start) {
    start = [x, y];
    el.classList.add("start");
    outputEl.textContent = "Select target square.";
  } else if (!end) {
    end = [x, y];
    el.classList.add("end");
    showPath();
  }
}

function showPath() {
  const path = knightMoves(start, end);
  if (!path.length) {
    outputEl.textContent = "No path found.";
    return;
  }
  // Highlight path (excluding start & end)
  for (let i = 1; i < path.length - 1; i++) {
    const [px, py] = path[i];
    document.getElementById(`sq-${px}-${py}`).classList.add("path");
  }
  // Display moves
  outputEl.innerHTML = `
   You made it in ${path.length - 1} moves! Here's your path:
   <ul>
     ${path.map(([x, y]) => `<li>[${x}, ${y}]</li>`).join("")}
   </ul>
 `;
}

resetBtn.addEventListener("click", () => {
  // Clear state
  start = null;
  end = null;
  outputEl.textContent = "";
  // Remove classes
  document.querySelectorAll(".square").forEach((sq) => {
    sq.classList.remove("start", "end", "path");
  });
});
