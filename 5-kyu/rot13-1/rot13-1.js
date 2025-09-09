function rot13(message) {
  let first13 = 'abcdefghijklm',
      last13 = 'nopqrstuvwxyz',
      result = '';
  for (let char of message) {
    let lower = char.toLowerCase();
    if (first13.includes(lower)) {
      let position = first13.indexOf(lower);
      let cipher = last13.charAt(position);
      result += (char === lower) ? cipher : cipher.toUpperCase();
    } else if (last13.includes(lower)) {
      let position = last13.indexOf(lower);
      let cipher = first13.charAt(position);
      result += (char === lower) ? cipher : cipher.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}
​