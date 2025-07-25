function stringExpansion(s) {
  let arr = s.split('')
  let result = []
  let repeatCount = 1;
  for(let i = 0; i<arr.length; i++){
    if(/[0-9]/.test(arr[i])){
      repeatCount = Number(arr[i])
    }else if(/[a-zA-Z]/.test(arr[i])){
      result.push(arr[i].repeat(repeatCount));
    }
  }
  return result.join('')
}