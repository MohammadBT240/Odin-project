export function loadContact() {
  const content = document.getElementById("content");
  content.textContent = ""; // Clear existing content

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const description = document.createElement("p");
  description.textContent =
    "Reach us at info@restaurant.com or call (+234) 706-7890.";

  const address = document.createElement("p");
  address.textContent = "16 James Garba, Yola Town, Adamawa State, Nigeria";

  const contactImage = document.createElement("img");
  contactImage.src = require("./images/contact1.jpg");
  contactImage.alt = "Contact image";
  contactImage.style.width = "300px";
  contactImage.style.height = "auto";

  content.appendChild(headline);
  content.appendChild(description);
  content.appendChild(address);
  content.appendChild(contactImage);
}
