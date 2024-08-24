const jonas = {
  firstName: "Mohammad",
  lastName: "Tukur",
  birthYear: 2003,
  job: "FreeLancer",
  friends: ["Usman", "Kasim", "Ahmad"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //    return 2023 - birthYear;
  // }

  // calcAge: function () {
  //    console.log(this);
  //    return 2023 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, 
       and he has ${
         this.hasDriversLicense ? "a Drivers License" : "NO Drivers License"
       }`;
  },
};
const summ = document.querySelector("p[class='summary']");
// console.log(jonas.getSummary());
summ.textContent = jonas.getSummary();

function add7(num) {
  return Number(num) + 7;
}

function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

function capitalize(str) {
  const chStr = (str) => {};
  //   return str.charAt(0).toUpperCase() + str;
}
console.log(jonas);
const copyJonas = { ...jonas };
delete copyJonas.lastName;
console.log(copyJonas);

console.log(add7(7));
console.log(multiply("7", 4));

// let key = prompt("What do you want to know about the user?", "name");

// access by variable
// alert(copyJonas[key]); // John (if enter "name")

// //square brackets

// //square brackets
// let fruit = "apple";
// let bag = {
//   [fruit + "Computer"]: 5,
// };
// console.log(bag);

// //computed property
// let fruit = prompt("What is the name of the fruit you bought?", "apple");
// const bag = {
//   [fruit]: 5,
// };
// alert(bag.strawberry);

// console.log(capitalize("mohammad BASHIR tuKur"));

/*function trial() {
   console.log('Mohammad');
}
// calling/running/invoking the function
trial();

function fruitProcessor(apples, oranges) {
   // console.log(apples, oranges);
   let juiceProcessed = `Juice with ${apples} apples and ${oranges} oranges `;
   return juiceProcessed;
}
const firstFunc = fruitProcessor(3,6);
console.log(firstFunc);

const secFunc  = fruitProcessor(4,9);
console.log(secFunc)

console.log(String('30'))


//==Function Declerations==
function calcAge(birthYear) {
   return 2022 - birthYear;
}  //or
birthYear = 2003;
function calcAge(birthYear) {
   let year = 2022;
   const currentAge = year - birthYear;
   return currentAge;
}
console.log(age1 = calcAge(2003)); //or
console.log(calcAge(2003));

//==Function Expression==
const secAge = function (birthYear) {
   return 2022 - birthYear;
}
const age2 = secAge(2003);
console.log(age2)

//Arrow Function
const thirdFunc = birthYear => 2022 - birthYear;
const age3 = thirdFunc(2003);
console.log(age3)

const yearsOfRetirement = (birthYear, firstName, status) => {
   const age4 = 2022 - birthYear;
   const retAge = 65 - age4;
   const remark = `${firstName} is going to retire at the age of ${retAge} as an ${status}`;
   return remark;
}
console.log(yearsOfRetirement(2003, 'Mohammad', 'Air Marshal'));
console.log(yearsOfRetirement(2002, 'Rufai', 'Air Vice Marshal'));


function multiFruit(fruit) {
   return fruit * 4;
}
function fruitProcessor(apples, oranges) {
   const multiApples = multiFruit(apples);
   const multiOranges = multiFruit(oranges)

   let juiceProcessed = `Juice with ${multiApples} apples and ${multiOranges} oranges `;
   return juiceProcessed;
}

console.log(fruitProcessor(3, 5));


const mainYear = function (birthYear) {
   return 2022 - birthYear;
}
const calcAge = function (birthYear) {
   const age = mainYear(birthYear);
   const retiAge = 65 - age;
   const currentAge = `He is retireing in ${retiAge}`;
   if (retiAge > 0) {
      return currentAge;
   } else {
      console.log(`this person has already retierd`);
   }
}
console.log(calcAge(1990));

// Method 1
const calcAverage = (val1, val2, val3) => (val1 + val2 + val3)/3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas)

function checkWinner(avgDolphins, avgKoalas) {
   if ( avgDolphins >= avgKoalas * 2) {
      console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas}.)`)
   }else if( avgKoalas >= avgDolphins * 2 ) {
      console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins}.)`)
   }else{
      console.log(`No one wins`)
   }
   // return checkWinner(avgDolphins, avgKoalas);
}
//First Values
checkWinner(avgDolphins, avgKoalas)
//Second Values
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas)


//Arrays
const friend1 = "Ahmad";
const friend2 = "Bala";
const friend3 = "Mohammad";

// Method 1 (Litral syntax)
const friends = ['Ahmad', 'Bala', 'Mohammad'];
console.log(friends);
// Method 2
const femFriends = new Array('Mufeedah', 'Amina', 'Aisha');
const years = new Array(2003, 2004, 2005, 2022, 2023, 2024);
console.log(`${femFriends[0]} was born in the year ${years[0]} just like me ${friends[2]}.`);
//Last Element
console.log(friends[friends.length - 1]);
//mutation
friends[2] = 'Al-amin';
console.log(friends);
//multia\ Array
const bashir = ['Mohammad', 'Bashir', 'Tukur', 2022-2003, '200lv']
console.log(`${bashir}`)


//Function in a function
// function multiFruit(fruit) {
//    return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//    const multiApples = multiFruit(apples);
//    const multiOranges = multiFruit(oranges)

//    let juiceProcessed = `Juice with ${multiApples} apples and ${multiOranges} oranges `;
//    return juiceProcessed;
// }
// console.log(fruitProcessor(4,6));

const  calcAverage = (a,b,c) => (a+b+c)/3;
//DATA 1
let Dolphins = calcAverage(44,23,71);
let Koalas = calcAverage(65,54,49);
console.log(Dolphins,Koalas);
//WINNER
const checkWinner = function(Dolphins, Koalas) {
   if (Dolphins >= 2 * Koalas) {
      console.log(`Dolphnis Win (${Dolphins} vs ${Koalas})`);
   } else if(Koalas >= 2 * Dolphins){
      console.log(`Koalas Win (${Koalas}) vs ${Dolphins}`);
   } else{
      console.log(`Non of them won`)
   }
   // return checkWinner(Dolphins, Koalas);
}
checkWinner(Dolphins, Koalas);

// DATA2
Dolphins = calcAverage(85,54,41);
Koalas = calcAverage(23,34,27);
console.log(Dolphins,Koalas);
checkWinner(Dolphins, Koalas);

// let firstAray = ['Mohammad', 'Bashir', 'Tukur'];
// console.log(firstAray[2])
// console.log(firstAray.length);
// console.log(firstAray[firstAray.length-3]);
firstAray[1] = 'Usman';
console.log(firstAray);
firstAray = ['Waziri', 2003, 'BAshir', firstAray];
console.log(firstAray);

const calcAge = function(birthyear){
   return 2022 - birthyear;
}
firstAray = [1990, 2003, 2005, 1998, 1999]
console.log(calcAge(firstAray[1]),calcAge(firstAray[2]),calcAge(firstAray[firstAray.length-1]) );

let friends = ['Ahmad', 'Usman', 'Waziri', 'Kasim'];
//Add Elmt
const newFriends = friends.push('Mig b', 2000) ;
console.log(friends)
console.log(newFriends);
//Remove Elmt
friends.unshift('Mubarak','Dahiru')
console.log(friends);
//Remove Last Elmt
friends.pop();
let popped = friends.pop();
console.log(popped)
console.log(friends);
//Remove First Elmt
console.log(friends.shift());
console.log(friends);
//Location Of Elmt
console.log(friends.indexOf('Usman'))
//Returns True if the Elmt Exist
console.log(friends.includes('Kasim'))

if (friends.includes(('Dahiru','Usman')&&('Waziri'))) {
   console.log(`The listed Names Are Included`);
}else{
   console.log(`They are Not Included`)
}

//Coding Challenge 2
// let calcTip = function(bill){
//    if (bill >= 30 && bill<= 300) {
//       let tip = bill * (15/100);
//       return tip
//    }else{
//       let tip = bill * (20/100);
//       return tip
//    }
// } //or
const calcTip = function(bill){
   return bill>=30 && bill<=300 ? bill*0.15 : bill*0.20
}

console.log(calcTip(100));
let bills = [125,555,44];
console.log(bills);
let tips = [`The tip for 125 is ${calcTip(125)}`, `The tip for 555 is ${calcTip(555)}`, `The tip for 44 is ${calcTip(44)}`];
// console.log(tips);
console.log(tips[0]);
console.log(tips[1]);
console.log(tips[2]);

let total = [`The total value for the first input is (${calcTip(125) + bills[0]})`, `The total value for the second input is (${calcTip(555) + bills[1]})`, `The total value for the Third input is (${calcTip(44) + bills[2]})` ]
console.log(total[0]);
console.log(total[1]);
console.log(total[2]);

//OBJECTS
const jonas = {
   firstName: 'Mohammad',
   lastName: 'Tukur',
   age: 2023-2003,
   job: 'FreeLancer',
   friends: ['Usman','Kasim','Ahmad']
}

const nameKey = 'Name'

console.log(jonas['first'+ nameKey]);
console.log(jonas['last'+ nameKey]);

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);
console.log(jonas.friends[1]);

// const intrestedIn = prompt('What do you want to know about jonas, Choose among firstName, lastName, age, job and friends')
// if (jonas[intrestedIn]) {
//    console.log(jonas[intrestedIn]);
// } else{
//    console.log('Wrong Choice!!. Choose among firstName, lastName, age, job and friends');
// }

jonas.location = "Nigeria";
jonas['twitter'] = "TukurTukur13";
console.log(jonas)

// console.log(`${jonas.friends}`)
// console.log(jonas.friends[1]);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is ${jonas.friends[0]}`)
*/
// const jonas = {
//   firstName: "Mohammad",
//   lastName: "Tukur",
//   birthYear: 2003,
//   job: "FreeLancer",
//   friends: ["Usman", "Kasim", "Ahmad"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //    return 2023 - birthYear;
//   // }

//   // calcAge: function () {
//   //    console.log(this);
//   //    return 2023 - this.birthYear;
//   // }

//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job},
//       and he has ${
//         this.hasDriversLicense ? "a Drivers License" : "NO Drivers License"
//       }`;
//   },
// };
// var hisAge = jonas.age
// console.log(hisAge)
// const summ = document.querySelectorAll(".summary");
// const summ = document.querySelector("p[class='summary']");
// console.log(jonas.calcAge());
// console.log(jonas.getSummary());
// summ.textContent = jonas.getSummary();

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas['calcAge'](2003));

//Challenge
// if (jonas.hasDriversLicense) {
//    console.log(`Jonas is a ${jonas.age}-year old Teacher, and he has a drivers license`);
// } else {
//    console.log(`Jonas is a ${jonas.age}-year old Teacher, and he DOES NOT have a drivers license`);
// }

// console.log(jonas.getSummary());
