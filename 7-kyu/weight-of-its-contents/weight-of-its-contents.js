/*
* Takes a bottleWeight and scale of the bottle to its contents
* and returns the weight of its contents
* @param {int} bottleWeight:
*  The weight of the entire bottle and contents
* @param {string} scale:
*  A string comparing the weight of the bottle contents to the weight of the bottle by itself
* Acceptable values: ('2 times larger', '4 times larger', '50 times smaller') 
*/
/*
function contentWeight(bottleWeight, scale) {
  const [numStr, , , keyword] = scale.split(" ");
  const N = Number(numStr);
​
  if (keyword === "larger") {
    const bottleOnly = bottleWeight / (1 + N);
    return bottleWeight - bottleOnly;
  } else if (keyword === "smaller") {
    return bottleWeight / (N + 1);
  }
}
*/
function contentWeight(bottleWeight, scale) {
  const [num, , keyword] = scale.split(" ");
  const N = Number(num);
  if (keyword === "larger") {
    const bottleOnly = bottleWeight / (1 + N);
    return bottleWeight - bottleOnly;
  } else if (keyword === "smaller") {
    return bottleWeight / (N + 1);
  }
}
​