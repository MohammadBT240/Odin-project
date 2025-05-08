// functions.test.js
const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./functions");

describe("capitalize()", () => {
  test("capitalizes the first character", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("returns empty string unchanged", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("reverseString()", () => {
  test("reverses a normal string", () => {
    expect(reverseString("abc")).toBe("cba");
  });
  test("handles single-character", () => {
    expect(reverseString("x")).toBe("x");
  });
});

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test("subtracts two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
  test("multiplies two numbers", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });
  test("divides two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
  test("throws on divide by zero", () => {
    expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
  });
});

describe("caesarCipher()", () => {
  test("shifts letters by given amount", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });
  test("wraps around from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("preserves letter case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("leaves non-alphabetic unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("handles negative shifts", () => {
    expect(caesarCipher("bcd", -1)).toBe("abc");
  });
});

describe("analyzeArray()", () => {
  const arr = [1, 8, 3, 4, 2, 6];
  const result = analyzeArray(arr);

  test("calculates average", () => {
    expect(result.average).toBe(4);
  });
  test("finds min", () => {
    expect(result.min).toBe(1);
  });
  test("finds max", () => {
    expect(result.max).toBe(8);
  });
  test("calculates length", () => {
    expect(result.length).toBe(6);
  });
  test("throws on empty array", () => {
    expect(() => analyzeArray([])).toThrow();
  });
});
