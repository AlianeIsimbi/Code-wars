Array.prototype.even = function() {
  return this.filter(num => typeof num === 'number' && Number.isInteger(num) && num % 2 === 0);
};
Array.prototype.odd = function() {
  return this.filter(num => typeof num === 'number' && Number.isInteger(num) && num % 2 !== 0);
};
Array.prototype.under = function(n) {
  return this.filter(num => typeof num === 'number' && Number.isInteger(num) && num < n);
};
Array.prototype.over = function(n) {
  return this.filter(num => typeof num === 'number' && Number.isInteger(num) && num > n);
};
Array.prototype.inRange = function(x, y) {
  return this.filter(num => typeof num === 'number' && Number.isInteger(num) && num >= x && num <= y);
};
​
​
// function even(data){
//   return data.filter(a => a % 2 === 0)
// }
// function odd(data){
//   return data.filter(a => a % 2 !== 0)
// }
// function under(data){
//   return data.filter((a, n) => a < n )
// }
// function over(data){
//   return data.filter((a, n) => a > n)
// }
// function inRange(data){
//   return data.filter((a, x, y) => x <= a <= y )
// }