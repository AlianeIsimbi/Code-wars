//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.filter(face => /^[:;][-~]?[)D]$/.test(face)).length;
}