function translate(sentence) {
  let vowels = 'aeiou',
      splitted = sentence.split(' '), 
      result = [];
  for (let word of splitted) {
    if (!word) {
      result.push(word);
      continue;
    }
    let punctuation = '';
    let cleanWord = word;
    while (cleanWord && ',.!?:;'.includes(cleanWord.slice(-1))) {
      punctuation = cleanWord.slice(-1) + punctuation;
      cleanWord = cleanWord.slice(0, -1);
    }
    if (/^\d+$/.test(cleanWord)) {
      result.push(word);
      continue;
    }
    let hasVowels = false;
    for (let char of cleanWord.toLowerCase()) {
      if (vowels.includes(char)) {
        hasVowels = true;
        break;
      }
    }
    if (!hasVowels) {
      result.push(cleanWord + 'ay' + punctuation);
      continue;
    }
    let wasCapitalized = cleanWord[0] && cleanWord[0] === cleanWord[0].toUpperCase();
    let workingWord = cleanWord.toLowerCase();
    
    if (vowels.includes(workingWord.charAt(0))) {
      let translatedWord = workingWord + 'way';
      if (wasCapitalized) {
        translatedWord = translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);