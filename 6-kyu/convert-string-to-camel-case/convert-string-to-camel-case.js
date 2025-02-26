function toCamelCase(str){
  let individual = str.split(/[-_]/);
  let capitalized = []
  for(i = 1; i<individual.length; i++){
    let word = individual[i].charAt(0).toUpperCase() + individual[i].slice(1)
    capitalized += word;
  }
  return [individual[0], ...capitalized].join('');
}