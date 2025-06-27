function isPalindrome(x) {
  let reversed = x.split('').reverse().join('')
  return x.toLowerCase() === reversed.toLowerCase() ? true: false;
}