function findOdd(A) {
  for (let num of A) {
    let count = 0;
    for (let x of A) {
      if (x === num) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return num;
    }
  }
}