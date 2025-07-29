function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  let area = 0.5 * numberOfSides * (circleRadius ** 2) * Math.sin((2 * Math.PI)/numberOfSides)
  return Number(area.toFixed(3));
}