export async function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = ""; // Clear existing content

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const description = document.createElement("p");
  description.textContent = "A selection of our finest dishes.";

  const menuList = document.createElement("ul");
  const api_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    const items = data.meals; // Extract meals from the response

    if (items) {
      items.forEach((item) => {
        const menuItem = document.createElement("li");
        const itemName = document.createElement("h3");
        const itemPrice = document.createElement("span");
        const itemImage = document.createElement("img");

        itemName.textContent = item.strMeal; // Meal name
        itemPrice.textContent =
          "Price: ₦" + (Math.floor(Math.random() * 100) + 20) + ",000"; // Random price for display
        itemImage.src = item.strMealThumb; // Image URL
        itemImage.alt = item.strMeal;
        itemImage.style.width = "100px"; // Adjust size

        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuList.appendChild(menuItem);
      });
    } else {
      const noItemsMessage = document.createElement("p");
      noItemsMessage.textContent = "No menu items available.";
      content.appendChild(noItemsMessage);
    }
  } catch (error) {
    console.error("Error fetching menu items:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Failed to load menu items. Please try again later.";
    content.appendChild(errorMessage);
  }

  content.appendChild(headline);
  content.appendChild(description);
  content.appendChild(menuList);
}
