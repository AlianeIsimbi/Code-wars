function password(str) {
  let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let small = 'abcdefghijklmnopqrstuvwxyz'
  let number = '01234556789'
  let capitalCount = 0
  let smallCount = 0
  let numberCount = 0
  let invalid = 0;
  for(i = 0; i<str.length; i++){
    if(capital.includes(str[i])){
      capitalCount++;
    }else if(small.includes(str[i])){
      smallCount++;
    }else if(number.includes(str[i])){
      numberCount++;
    }else{
      invalid++;
    }
  }
  if(str.length >= 8 && capitalCount > 0 && smallCount > 0 && numberCount > 0){
    return true;
  }else{
    return false;
  }
}