function findNextSquare(sq) {
  let num = Math.sqrt(sq);
  let whole = Math.floor(num)
  if(num === whole){
    return (num + 1) ** 2;
  }
  return -1;
}