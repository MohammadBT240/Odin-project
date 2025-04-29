import Gameboard from "./gameboard.js";

export default class Player {
  constructor(type = "human") {
    this.type = type;
    this.board = new Gameboard();
    this._history = new Set(); // for computer
  }
  attack(enemyBoard, coords) {
    let target;
    if (this.type === "human") {
      target = coords;
    } else {
      // generate random [x,y] not in history
      do {
        target = [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ];
      } while (this._history.has(target.toString()));
      this._history.add(target.toString());
    }
    enemyBoard.receiveAttack(target);
  }
}
