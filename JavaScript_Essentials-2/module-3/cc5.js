class FigureAdvanced extends Figure {
  cleanAndSort() {
    // Remove duplicate points and sort
    let uniquePoints = new Map();
    for (let p of this.elements.points) {
      uniquePoints.set(`${p.x},${p.y}`, p);
    }
    this.elements.points = Array.from(uniquePoints.values()).sort((a, b) =>
      a.x !== b.x ? a.x - b.x : a.y - b.y,
    );

    // Remove duplicate lines and sort
    let uniqueLines = new Map();
    for (let l of this.elements.lines) {
      let key = l.points.map((p) => `${p.x},${p.y}`).join("|");
      uniqueLines.set(key, l);
    }
    this.elements.lines = Array.from(uniqueLines.values()).sort((a, b) => {
      if (!a.points.length || !b.points.length) return 0;
      return a.points[0].x !== b.points[0].x
        ? a.points[0].x - b.points[0].x
        : a.points[0].y - b.points[0].y;
    });
  }
}
