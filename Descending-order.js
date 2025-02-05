function descendingOrder(n){
    let arr = n.toString().split('');
    let result =arr.sort((a,b)=> b-a).join('');
      return Number(result);
  }