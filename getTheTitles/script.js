const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (books) {
  return books.map((book) => book.title);
};

books.push({ title: "Moh", author: "Mohammad" });
console.log(getTheTitles(books));
