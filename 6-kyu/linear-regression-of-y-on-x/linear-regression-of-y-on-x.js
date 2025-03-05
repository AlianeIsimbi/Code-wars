function regression_line(x,y){
  let sumX = x.reduce((a, b)=> a + b, 0)
  let sumY = y.reduce((a, b)=> a + b, 0)
  let sumXY = x.reduce((a,b, i)=> a + b * y[i], 0)
  let sumX2 = x.reduce((a,b)=> a + b**2, 0)
  
  let denominator = x.length * sumX2 - (sumX)**2;
  
  let a = ((sumX2*sumY) - (sumX*sumXY))/denominator;
  let b = ((x.length*sumXY) - (sumX*sumY))/denominator;
  return [a.toFixed(4), b.toFixed(4)].map(Number);
}