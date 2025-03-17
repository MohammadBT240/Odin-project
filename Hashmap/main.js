import Hashmap from "./Hashmap.js";

function stringToNumber(string) {
  let hashCode = 0;
  for (let i = 0; i < string.length; i++) {
    hashCode += string.charCodeAt(i);
  }

  return hashCode;
}

// function hash(name) {
//   return name.charAt(0);
// }

function hash(name, surname) {
  return stringToNumber(name) + stringToNumber(surname);
}

console.log(hash("fred", "samson"));
