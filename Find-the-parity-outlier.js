function findOutlier(integers){
    let trialInt = integers.slice(0,3);
    let checkEven = trialInt.filter(num => num % 2 === 0);
    let isMostlyEven = checkEven.length>=2;
    for(i=0; i<integers.length; i++){
      if(isMostlyEven && integers[i] % 2 !== 0){
        return integers[i];
      }else if(!isMostlyEven && integers[i] % 2 === 0){
        return integers[i];
      }
    }
  }