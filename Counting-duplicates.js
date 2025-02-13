function duplicateCount(text) {
    let lower = text.toLowerCase();
    let counted = []; 
    let count = 0;
  
    for (let char of lower) {
      if (lower.indexOf(char) !== lower.lastIndexOf(char) && !counted.includes(char)) {
        count++;     
        counted.push(char);  
      }
    }
    return count;
  }