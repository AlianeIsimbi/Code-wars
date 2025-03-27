function validatePIN (pin) {
  if(pin.length !== 4 && pin.length !== 6){
    return false
  }
  for(i = 0; i<pin.length; i++){
    if(pin[i] < '0' || pin[i] > '9'){
      return false;
    }
  }
  return true;
}