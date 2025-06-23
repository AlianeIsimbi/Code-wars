function anagramCounter(wordsArray) {
  let numberOfPairs = 0;
  let sortedArray = [];
  for(let word of wordsArray) {
    let sortedWord = word.split('').sort().join('');
    sortedArray.push(sortedWord);
  }
  for(let i = 0; i < sortedArray.length; i++) {
    for(let j = i + 1; j < sortedArray.length; j++) {
      if(sortedArray[i] === sortedArray[j]) {
        numberOfPairs++;
      }
    }
  }
  return numberOfPairs;
}