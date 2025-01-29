function printCoord(pt: { x?: number; y?: number }) {
  console.log("The coordinate's x value is " + (pt.x === undefined ? "undefined" : pt.x));
  console.log("The coordinate's y value is " + (pt.y === undefined ? "undefined" : pt.y));
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3 });
printCoord({});