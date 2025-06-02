function score(dice) {
  let sorted = [...dice].sort((a, b) => a - b);
  let score = 0;
  let counts = {};
  for (let num of sorted) {
    counts[num] = (counts[num] || 0) + 1;
  }
  for (let num in counts) {
    let count = counts[num];
    num = Number(num);
​
    if (count >= 3) {
      if (num === 1) {
        score += 1000;
      } else {
        score += num * 100;
      }
      count -= 3;
    }
    if (num === 1) score += count * 100;
    if (num === 5) score += count * 50;
  }
  return score;
}
​