function printerError(s) {
  let numerator = 0,
      denominator = s.length,
      letters = 'abcdefghijklm';
  for(i = 0; i<s.length; i++){
    if(!letters.includes(s[i])){
      numerator++
    }
  }
  
  return `${numerator}/${denominator}`;
}