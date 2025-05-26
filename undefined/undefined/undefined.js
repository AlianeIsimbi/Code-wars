function lettersToNumbers(s) {
    let code = [];
    let letters = 'abcdefghijklmnopqrstuvwxyz';
  for(let i = 0; i<s.length; i++){
    if(s[i].match(/[a-z]/)){
      code.push(letters.indexOf(s[i]) + 1);
    }else if(s[i].match(/[A-Z]/)){
      code.push((letters.indexOf(s[i].toLowerCase()) + 1) * 2)
    }else if(s[i].match(/\d/)){
      code.push(parseInt(s[i]))                   
    }
  }
  return code.reduce((a,b)=> a + b, 0);
}
​