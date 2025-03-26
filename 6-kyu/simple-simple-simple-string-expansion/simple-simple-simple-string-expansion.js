function stringExpansion(s) {
  let result = "";
    let repeatCount = 1;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!isNaN(char) && char !== ' ') { 
            repeatCount = Number(char);
        } else {
            result += char.repeat(repeatCount);
        }
    }
    return result;
}