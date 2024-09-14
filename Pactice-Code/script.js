//Factory Functions
function createUser(name) {
  const discordName = "@" + name.toLowerCase();

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;
  const removeReputation = () => reputation--;

  return { name, discordName, getReputation, giveReputation, removeReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation(),
});

const mohammad = createUser("Mohammad");
mohammad.giveReputation();
mohammad.giveReputation();
// mohammad.removeReputation();

console.log({
  discordName: mohammad.discordName,
  currentReputation: mohammad.getReputation(),
});

function createPlayer(name, level) {
  const { getReputation, giveReputation, discordName } = createUser(name);

  const increaseLevel = () => level++;
  return { name, discordName, getReputation, giveReputation, increaseLevel };
}

const bashir = createPlayer("Bashir", 200);
bashir.giveReputation();
console.log({
  discordName: bashir.discordName,
  Reps: bashir.giveReputation(),
});

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const div = (a, b) => a / b;
  const mul = (a, b) => a * b;

  return { add, sub, div, mul };
})();

console.log(calculator.add(3, 5));
console.log(calculator.sub(6, 2));
console.log(calculator.mul(14, 5534));

// logs { discordName: "@josh", reputation: 2 }

/**
function makeAdding(firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting(secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return function third(thirdNumber) {
      return first + second + thirdNumber;
    };
  };
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
const secAdd = add5(2);
console.log(secAdd(3)); // logs 7

// function loopAdd(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
 */
// console.log(loopAdd(5));
/**
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
 */
