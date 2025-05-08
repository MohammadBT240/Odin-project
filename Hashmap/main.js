// import Hashmap from "./Hashmap.js";

// /** Basic Hash */
// function stringToNumber(string) {
//   let hashCode = 0;
//   for (let i = 0; i < string.length; i++) {
//     hashCode += string.charCodeAt(i);
//     console.log(hashCode);
//   }
//   return hashCode;
// }

// /**Hash (To avoid collision) */
// function stringToNumber(string) {
//   let hashCode = 0;

//   const primeNumber = 31;
//   for (let i = 0; i < string.length; i++) {
//     hashCode = primeNumber * hashCode + string.charCodeAt(i);
//   }
//   return hashCode;
// }

// // function hash(name) {
// //   return name.charAt(0);
// // }

// function hash(name, surname = "") {
//   return stringToNumber(name) + stringToNumber(surname);
// }

// console.log(hash("fred", "samson"));
// console.log(hash("Sara"));
// console.log(hash("raSa"));
