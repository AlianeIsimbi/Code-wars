function solve(a, b) { 
  let result = 0;
  if (b.length > a.length) {
    return 0;
  }
  let arr = a.split('');
​
  for (let j of b) {
    let matched = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === j) {
        arr[i] = null;
        matched = true;
        break;
      }
    }
    if (!matched){
      return 0;
    } 
  }
  result = arr.filter(c => c !== null).length;
  return result;
}
​