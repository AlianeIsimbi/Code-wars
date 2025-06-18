function countBits(n) {
    let bit = n.toString(2);
    let count = 0;
  for(let num of bit){
    if(num === "1"){
      count++;
    }
  }
    return count;
}