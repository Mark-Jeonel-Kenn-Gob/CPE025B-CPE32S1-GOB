class Point {
  constructor(x, y) {
    this.type = "point";
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(pointsArr) {
    this.type = "line";
    this.points = pointsArr.map((p) => new Point(p[0], p[1]));
  }
}

class Figure {
  constructor(elements = { points: [], lines: [] }) {
    this.elements = elements;
  }

  addPoint(x, y) {
    this.elements.points.push(new Point(x, y));
  }

  addLine(pointsArr) {
    this.elements.lines.push(new Line(pointsArr));
  }

  toJSON() {
    return JSON.stringify(this.elements);
  }

  fromJSON(jsonStr, replace = false) {
    let data = JSON.parse(jsonStr);
    if (replace) this.deleteAll();

    if (data.points) {
      data.points.forEach((p) => this.addPoint(p.x, p.y));
    }
    if (data.lines) {
      data.lines.forEach((l) => {
        let pts = l.points.map((p) => [p.x, p.y]);
        this.addLine(pts);
      });
    }
  }

  deleteAll() {
    this.elements = { points: [], lines: [] };
  }
}

// Test Case from Lab included natively...
let fig = new Figure();
fig.addPoint(1, 2);
fig.addLine([
  [1, 2],
  [3, 4],
]);
let json = fig.toJSON();
console.log(json);

let fig2 = new Figure();
fig2.fromJSON(json);
console.log(fig2);
