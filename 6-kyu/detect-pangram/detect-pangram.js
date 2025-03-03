function isPangram(string){
  let lower = string.toLowerCase();
  let unique = [...new Set(lower)]
  let count = 0;
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  for(i = 0; i<unique.length; i++){
    if(letters.includes(unique[i]) === true){
      count++;
    }
  }
  if(count === 26){
    return true;
  }else{
    return false;
  }
}