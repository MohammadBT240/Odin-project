export default class Gameboard {
  constructor() {
    this.ships = [];
    this.occupied = new Map(); // key: 'x,y' → ship
    this.hits = [];
    this.misses = [];
  }
  placeShip(ship, coords) {
    this.ships.push(ship);
    coords.forEach(([x, y]) => {
      this.occupied.set(`${x},${y}`, ship);
    });
  }
  receiveAttack([x, y]) {
    const key = `${x},${y}`;
    const ship = this.occupied.get(key);
    if (ship) {
      ship.hit();
      this.hits.push([x, y]);
    } else {
      this.misses.push([x, y]);
    }
  }
  allSunk() {
    return this.ships.every((s) => s.isSunk());
  }
}
