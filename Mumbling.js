function accum(s) {
    let result = [];
    
    for (let i = 0; i < s.length; i++) {
      let char = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
      result.push(char);
    }
    
    return result.join("-");
  }