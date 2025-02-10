function isIsogram(str){
    let lower = str.toLowerCase()
  let arr = lower.split('');
  let set = [...new Set(lower)]
  console.log(set)
  console.log(arr)
  if (arr.length === set.length){
    return true;
  }else{
    return false;
  }
}