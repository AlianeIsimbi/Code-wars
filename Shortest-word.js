function findShort(s){
    let arr = s.split(' ');
    let newArr = []
    for(i = 0; i < arr.length; i++){
       newArr.push(arr[i].length);
    }
    return Math.min(...newArr);
  }