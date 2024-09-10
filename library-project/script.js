const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const bookDisplay = document.getElementById("bookDisplay");
  bookDisplay.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
       <h2>${book.title}</h2>
       <p>Author: ${book.author}</p>
       <p>Pages: ${book.pages}</p>
       <p>Read: ${book.read ? "Yes" : "No"}</p>
       <button class="remove-btn" data-index="${index}">Remove</button>
       <button class="toggle-read-btn" data-index="${index}">Toggle Read</button>
     `;

    bookDisplay.appendChild(bookCard);
  });
}

document.getElementById("bookForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  displayBooks();
  e.target.reset(); // Reset the form after submission
  document.getElementById("bookForm").style.display = "none"; // Hide the form
});

document.getElementById("newBookBtn").addEventListener("click", () => {
  document.getElementById("bookForm").style.display = "block";
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.getAttribute("data-index");
    myLibrary.splice(index, 1);
    displayBooks();
  }

  if (e.target.classList.contains("toggle-read-btn")) {
    const index = e.target.getAttribute("data-index");
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
  }
});
