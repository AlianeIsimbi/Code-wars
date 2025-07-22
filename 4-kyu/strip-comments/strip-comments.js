function solution(text, markers) {
  let lines = text.split('\n');
  
  let processedLines = lines.map(line => {
    let earliestIndex = line.length;
    
    for (let marker of markers) {
      let index = line.indexOf(marker);
      if (index !== -1 && index < earliestIndex) {
        earliestIndex = index;
      }
    }
    let cleanedLine = line.slice(0, earliestIndex);
    return cleanedLine.trimEnd();
  }); 
  return processedLines.join('\n');
}