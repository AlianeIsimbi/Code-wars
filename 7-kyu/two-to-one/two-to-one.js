function longest(s1, s2) {
  let result = '';
  let array1 = s1.split('');
  let array2 = s2.split('');
  let usable = [...array1, ...array2].sort()
  for(i = 0; i<usable.length; i++){
    if(i === 0 || usable[i] !== usable[i-1]){
      result += usable[i]
    }
  }
  return result;
}