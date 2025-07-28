function squareProduct(n) {
  let result = [];
  let a = 1;
  let squareA, squareB, b;
  while (a * a <= n) {
    squareA = a * a;
    if (n % squareA === 0) {
      squareB = n / squareA;
      b = Math.sqrt(squareB);
      if (Number.isInteger(b)) {
        let pair = [a, b].sort((x, y) => x - y);
        let exists = result.some(p => p[0] === pair[0] && p[1] === pair[1]);
        if (!exists) result.push(pair);
      }
    }
    a++;
  }
  return result;
}
​