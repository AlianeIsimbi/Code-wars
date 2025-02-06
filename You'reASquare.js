var isSquare = function(n){
    if(n < 0){
      return false;
    }else if(Math.sqrt(n) === Math.floor(Math.sqrt(n))){
      return true;
    }else{
      return false;
    }
  }