function pigIt(str){
  let splitted = str.split(' ');
  let result = [];
  for(let i = 0; i<splitted.length; i++){
    let word = splitted[i]
    if(/^[a-zA-Z]+$/.test(word)){
      let removed = splitted[i].charAt(0)
      let kept = splitted[i].slice(1)
      result.push(kept + removed + 'ay');   
    }else{
      result.push(word)
    }
  }
  return result.join(' ')
}