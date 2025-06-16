function calcType(a, b, res) {
  switch (res) {
    case a - b:
      return 'subtraction';
      break;
    case a + b:
      return 'addition';
      break;
    case a * b:
      return 'multiplication';
      break;
    default:
      return 'division';
  }
}