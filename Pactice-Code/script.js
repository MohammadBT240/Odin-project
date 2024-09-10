function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "i'\ve read it" : "not read yet"
    }`;
  };
}

const book1 = new Book("Intruder", "Mohamad Bashir", "346", true);
const book2 = new Book("The Greatest Trial", "Alhamdu Bello", "234", false);
book1.info();
book2.info();
console.log(book1);
console.log(Object.getPrototypeOf(book1));

Book.prototype.sayHello = function () {
  console.log(`Hi! it's ${this.author}, and I'm a Reader!`);
};
book1.sayHello();
book2.sayHello();
console.log(book1.__proto__);

console.log(Object.getPrototypeOf(book1.__proto__));
// console.log(book1.info());

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hey, Im ${this.name}`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.marker = function () {
  console.log(`Im also ${this.marker}`);
};

Object.getPrototypeOf(Player.prototype);

Object.setPrototypeOf(Player.prototype, Person.prototype);

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!
