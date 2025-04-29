function getFunction(sequence) {
  const [a, b, c, d, e] = sequence;
  const diffs = [b - a, c - b, d - c, e - d];
​
  if (!diffs.every(diff => diff === diffs[0])) return "Non-linear sequence";
​
  const n = diffs[0]; 
  const m = a;       
  let nPart = "";
  if (n === 0){
    return `f(x) = ${m}`;
  }
  if (n === 1){
    nPart = "x";
  }else if (n === -1){
    nPart = "-x";
  }else{
    nPart = `${n}x`;
  }
  let mPart = "";
  if (m > 0){
    mPart = ` + ${m}`;
  }else if (m < 0) {
      mPart = ` - ${Math.abs(m)}`;
  }
  return `f(x) = ${nPart}${mPart}`;
}