function isAValidMessage(message) {
  if (message === ""){
    return true;
  } 
  let splitted = message.split(/(\d+)/);
  splitted = splitted.filter(part => part !== "");
  if (splitted.length % 2 !== 0){
    return false;
  } 
  for (let i = 0; i < splitted.length; i += 2) {
    let numberPart = splitted[i];
    let textPart = splitted[i + 1];
    if (Number(numberPart) !== textPart.length){
      return false;
    } 
  }
  return true;
}