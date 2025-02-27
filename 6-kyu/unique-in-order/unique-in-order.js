var uniqueInOrder = function(iterable) {
  let result = [];
  let array = typeof iterable === "string" ? iterable.split('') : iterable;
  
  for (let i = 0; i < array.length; i++) {
    if (i === 0 || array[i] !== array[i - 1]) {
      result.push(array[i]);
    }
  }
  
  return result;
};
​