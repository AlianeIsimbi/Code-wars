function persistence(num) {
   let count = 0;
  if (num < 10){
    return count;
  }
  let multiples = num.toString().split('').reduce((a, b) => a * b, 1)
  return 1 + persistence(multiples);
}