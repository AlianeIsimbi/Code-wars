var compose = function() {
  if (arguments.length === 0){
    return undefined; 
  }
  if (arguments.length === 1){
    return arguments[0];  
  }
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    result = arguments[i](result);
  }
  return result;
};
​