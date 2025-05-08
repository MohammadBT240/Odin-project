import Player from "../src/player.js";
import Gameboard from "../src/gameboard.js";

test("human player attacks with given coords", () => {
  const human = new Player("human");
  const enemy = new Gameboard();
  // spy on enemy.receiveAttack...
  human.attack(enemy, [2, 3]);
  // expect receiveAttack called with [2,3]
});

test("computer player picks legal random move", () => {
  const cpu = new Player("computer");
  const enemy = new Gameboard();
  // track moves to ensure no repeats:
  for (let i = 0; i < 100; i++) {
    cpu.attack(enemy);
  }
  // expect that cpu._history length equals number of attacks,
  // and no coords repeat.
});
