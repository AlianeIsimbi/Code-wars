function duplicateEncode(word){
   let encoded = '';
  let small = word.toLowerCase()
  for(i = 0; i<small.length; i++){
    let char = small[i];
      let count = 0;
    for(j = 0; j<small.length; j++){
        if(small[j] === small[i]){
          count++;
        }
    }
  if(count > 1){
    encoded += ')';
  }else{
    encoded += '(';
  }
  }
  return encoded;
}
​