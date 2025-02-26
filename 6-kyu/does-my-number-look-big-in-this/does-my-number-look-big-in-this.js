function narcissistic(value) {
  let power = value.toString().length;
  let array = value.toString().split('').map(Number);
  let newArray = []
  for(i = 0; i<array.length; i++){
    newArray.push(array[i] ** power)
  }
  return newArray.reduce((a, b)=> a + b, 0) === value ? true : false;
}
​