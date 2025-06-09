function shiftLeft(s, t) {
  let count = 0;
  while (s !== t && s.length > 0 && t.length > 0) {
    if (s.length >= t.length) {
      s = s.slice(1);
    } else {
      t = t.slice(1);
    }
    count += 1;
  }
  return s === t ? count : count + Math.max(s.length, t.length);
}
​