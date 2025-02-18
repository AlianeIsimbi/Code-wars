function drawACross(n) {
  if (n<3){
    return `Not possible to draw cross for grids less than 3x3!`
  }
  if(n % 2 === 0){
    return `Centered cross not possible!`
  }
  let result = '';
  for(i = 0; i < n; i++){
    let row = '';
    for(j = 0; j < n; j++){
      if(j === i || j === n - 1 - i){
        row += 'x';
      }else{
        row += ' ';
      }
    }
    result += row + '\n';
  }
  return result.trim();
}