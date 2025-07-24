function divisors(integer) {
  let arr = [];
  for(let x = 2; x<integer; x++){
    if(integer % x === 0){
      arr.push(x);
    }
  }
  if(arr.length === 0){
    return `${integer} is prime`
  }
  return arr;
}