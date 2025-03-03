function getSum(a, b)
{
  let sum = 0;
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  if(a === b){
    return a;
  }
  for(let i = min; i<= max; i++){
      sum += i;
  }
  return sum;
}