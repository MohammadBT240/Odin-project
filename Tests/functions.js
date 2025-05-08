// 1. Capitalize
function capitalize(str) {
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}

// 2. Reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 3. Calculator object
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  },
};

// 4. Caesar cipher
function caesarCipher(str, shift) {
  const A = "A".charCodeAt(0);
  const Z = "Z".charCodeAt(0);
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);

  // normalize shift to 0–25
  const s = ((shift % 26) + 26) % 26;

  return str
    .split("")
    .map((ch) => {
      const code = ch.charCodeAt(0);

      // uppercase
      if (code >= A && code <= Z) {
        return String.fromCharCode(((code - A + s) % 26) + A);
      }
      // lowercase
      if (code >= a && code <= z) {
        return String.fromCharCode(((code - a + s) % 26) + a);
      }
      // non-letters unchanged
      return ch;
    })
    .join("");
}

// 5. Analyze array
function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0)
    throw new Error("analyzeArray requires a non-empty array");
  const length = arr.length;
  let sum = 0,
    min = arr[0],
    max = arr[0];
  for (const n of arr) {
    sum += n;
    if (n < min) min = n;
    if (n > max) max = n;
  }
  return {
    average: sum / length,
    min,
    max,
    length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
