function getMiddle(s) {
    let arr = s.split('');
    let mid = Math.floor(arr.length / 2);
  
    if (arr.length % 2 === 0) {
      return arr[mid - 1] + arr[mid]; 
    } else {
      return arr[mid]; 
    }
  }