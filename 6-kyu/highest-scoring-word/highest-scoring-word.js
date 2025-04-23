function high(x){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const words = x.split(' ');
  let highestScore = 0;
  let highestWord = '';
​
  for (let word of words) {
    let score = 0;
​
    for (let char of word) {
      score += alphabet.indexOf(char) + 1;
    }
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  }
  return highestWord;
}