import Ship from "../src/ship.js";

test("new ship has zero hits and correct length", () => {
  const s = new Ship(3);
  expect(s.length).toBe(3);
  expect(s.hits).toBe(0);
  expect(s.isSunk()).toBe(false);
});

test("hit() increments hits", () => {
  const s = new Ship(2);
  s.hit();
  expect(s.hits).toBe(1);
  expect(s.isSunk()).toBe(false);
});

test("isSunk() returns true once hits reach length", () => {
  const s = new Ship(2);
  s.hit();
  s.hit();
  expect(s.isSunk()).toBe(true);
});
