function rgb(r, g, b) {
  let result = [];
  function toHex(value) {
    value = Math.max(0, Math.min(255, value));
    let hex = value.toString(16).toUpperCase();
    return hex.length === 1 ? '0' + hex : hex;
  }
  let hex1 = toHex(r);
  result.push(hex1);
  let hex2 = toHex(g);
  result.push(hex2);
  let hex3 = toHex(b);
  result.push(hex3);
  return result.join('');
}
​