// Function to calculate the Fibonacci sequence up to the nth term
// function calculateFibonacci() {
//   const num = parseInt(document.getElementById("numberInput").value);
//   if (isNaN(num) || num < 0) {
//     document.getElementById("result").innerText =
//       "Please enter a valid positive number.";
//     return;
//   }
//   let fibArray = [0, 1];
//   for (let i = 2; i < num; i++) {
//     fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//   }
//   document.getElementById("result").innerText = `Fibonacci sequence: ${fibArray
//     .slice(0, num)
//     .join(", ")}`;
// }

function fibs(n) {
  let fibArray = [0, 1]; // Starting with the first two Fibonacci numbers

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return fibArray.slice(0, n);

  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  document.getElementById(
    "result"
  ).innerText = `Fibonacci sequence (Iterative): ${fibArray.join(", ")}`;
}

// Recursive Fibonacci function
function fibsRec(n, fibArray = [0, 1]) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (fibArray.length === n) {
    document.getElementById(
      "result"
    ).innerText = `Fibonacci sequence (Recursive): ${fibArray.join(", ")}`;
    return fibArray;
  }

  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibsRec(n, fibArray);
}

function fibSelector() {
  const num = parseInt(document.getElementById("numberInput").value);
  const option = document.getElementById("fibpnacci").value;

  if (isNaN(num) || num <= 0) {
    document.getElementById("result").innerText =
      "Please enter a valid positive number.";
    return;
  }

  if (option === "fib_iterative") fibs(num);
  if (option === "fib_recursive") fibsRec(num);
}
// Function to check Big O notation based on the input size
function checkBigONotation() {
  const num = parseInt(document.getElementById("numberInput").value);
  if (isNaN(num) || num < 0) {
    document.getElementById("result").innerText =
      "Please enter a valid positive number.";
    return;
  }
  let bigO;
  if (num < 10) bigO = "O(1) - Constant Complexity";
  else if (num < 100) bigO = "O(log n) - Logarithmic Complexity";
  else if (num < 1000) bigO = "O(n) - Linear Complexity";
  else bigO = "O(n^2) - Quadratic Complexity";
  document.getElementById("result").innerText = `Big O Notation: ${bigO}`;
}

// Function to calculate factorial of a number
function calculateFactorial() {
  const num = parseInt(document.getElementById("numberInput").value);
  if (isNaN(num) || num < 0) {
    document.getElementById("result").innerText =
      "Please enter a valid positive number.";
    return;
  }
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  document.getElementById(
    "result"
  ).innerText = `Factorial of ${num}: ${factorial}`;
}
