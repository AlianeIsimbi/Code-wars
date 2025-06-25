function scramble(str1, str2) {
  const count = new Array(26).fill(0);
  for (let i = 0; i < str2.length; i++) {
    count[str2.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < str1.length; i++) {
    const idx = str1.charCodeAt(i) - 97;
    if (count[idx] > 0) count[idx]--;
  }
  return count.every(c => c === 0);
}