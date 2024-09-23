export function loadHome() {
  const content = document.getElementById("content");
  content.textContent = ""; // Clear existing content

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant";

  const description = document.createElement("p");
  description.textContent = "Best dining experience you’ll ever have.";

  const image = document.createElement("img");
  image.src = require("./images/resturant1.jpg");
  image.alt = "Restaurant view";
  image.style.width = "300px";

  content.appendChild(headline);
  content.appendChild(description);
  content.appendChild(image);
}
