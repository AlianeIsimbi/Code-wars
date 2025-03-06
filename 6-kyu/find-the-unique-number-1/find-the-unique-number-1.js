function findUniq(arr) {
  let sorted = arr.sort((a,b)=> a-b)
  return sorted[0] === sorted[1] ? sorted[sorted.length-1] : sorted[0];
}