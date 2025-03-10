function countLettersAndDigits(input) {
  let letters = input.match(/[A-Z]/gi) || [];
  let numbers = input.match(/[0-9]/g) || [];
  return letters.length + numbers.length;
}