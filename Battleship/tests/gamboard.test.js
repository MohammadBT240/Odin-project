import Gameboard from "../src/gameboard.js";
import Ship from "../src/ship.js";

let gb;
beforeEach(() => {
  gb = new Gameboard();
});

test("places ship at given coordinates", () => {
  const s = new Ship(2);
  gb.placeShip(s, [
    [1, 1],
    [1, 2],
  ]);
  expect(gb.ships).toContain(s);
  // could also test internal map if exposed for testing
});

test("receiveAttack hits ship and records hit", () => {
  const s = new Ship(2);
  gb.placeShip(s, [[0, 0]]);
  gb.receiveAttack([0, 0]);
  expect(s.hits).toBe(1);
  expect(gb.hits).toContainEqual([0, 0]);
});

test("receiveAttack on empty coord records a miss", () => {
  gb.receiveAttack([5, 5]);
  expect(gb.misses).toContainEqual([5, 5]);
});

test("allSunk returns true only when all ships sunk", () => {
  const s1 = new Ship(1);
  const s2 = new Ship(2);
  gb.placeShip(s1, [[0, 0]]);
  gb.placeShip(s2, [
    [1, 0],
    [1, 1],
  ]);
  gb.receiveAttack([0, 0]);
  expect(gb.allSunk()).toBe(false);
  gb.receiveAttack([1, 0]);
  gb.receiveAttack([1, 1]);
  expect(gb.allSunk()).toBe(true);
});
