const palindrome = function palindrome(str) {
  const alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789";
  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string

  let cleanStr = str
    .toLowerCase()
    .split("")
    .filter((s) => alphaNum.includes(s))
    .join("");

  // Create a new reversed string for comparison
  let reversedStr = cleanStr.split("").reverse("").join("");

  return (cleanStr = reversedStr);
};

console.log(palindrome("Mohammad"));
