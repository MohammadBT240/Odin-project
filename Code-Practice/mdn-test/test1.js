let season = "winter";
let response;

// Add your code here
if (season === "summer") {
  response = "Its gonna be a blast of a summer";
} else if (season === "winter") {
  response = `This Winter is gonna be very cold`;
} else {
  response = `The ${season} season is gonna be like any other.`;
}
// Don't edit the code below here!

const section = document.querySelector("section");

let para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
