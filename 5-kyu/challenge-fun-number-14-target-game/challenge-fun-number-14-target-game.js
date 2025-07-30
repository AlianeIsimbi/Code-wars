function targetGame(vals) {
  if (vals.length === 0) return 0;
  if (vals.length === 1) return Math.max(0, vals[0]);
  let prev2 = 0;
  let prev1 = Math.max(0, vals[0]);
  for (let i = 1; i < vals.length; i++) {
    let pick = vals[i] + prev2;
    let skip = prev1;
    let current = Math.max(skip, pick);
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}
​