function filterEvenLengthWords(words) {
    let arr = words.filter((a)=> a.length % 2 === 0)
    return arr;
  }