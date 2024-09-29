const itemsPerPage = 5; // Number of items per page
let currentPage = 1; // Track the current page
let items = []; // Store fetched menu items

export async function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = ""; // Clear existing content

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const description = document.createElement("p");
  description.textContent = "A selection of our finest dishes.";

  const pagHtml = document.createElement("div");
  pagHtml.innerHTML = `<nav class="pagination-container">
                        <button class="pagination-button" id="prev-button" aria-label="Previous page" title="Previous page" disabled>
                          &lt;
                        </button>
                        <div id="pagination-numbers"></div>
                        <button class="pagination-button" id="next-button" aria-label="Next page" title="Next page">
                          &gt;
                        </button>
                      </nav>`;

  const menuList = document.createElement("ul");
  const api_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    items = data.meals || []; // Store meals from the response

    if (items.length > 0) {
      content.appendChild(headline);
      content.appendChild(description);
      content.appendChild(menuList);
      content.appendChild(pagHtml);
      setupPaginationButtons(); // Setup pagination buttons
      displayPage(currentPage); // Display the first page
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

  function displayPage(page) {
    menuList.innerHTML = ""; // Clear the existing items
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    currentItems.forEach((item) => {
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

    updatePaginationButtons();
  }

  function setupPaginationButtons() {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentPage < Math.ceil(items.length / itemsPerPage)) {
        currentPage++;
        displayPage(currentPage);
      }
    });
  }

  function updatePaginationButtons() {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    prevButton.disabled = currentPage === 1; // Disable prev button on first page
    nextButton.disabled = currentPage >= Math.ceil(items.length / itemsPerPage); // Disable next button on last page

    // Update pagination numbers
    const paginationNumbers = document.getElementById("pagination-numbers");
    paginationNumbers.innerHTML = `Page ${currentPage} of ${Math.ceil(
      items.length / itemsPerPage
    )}`;
  }
}
