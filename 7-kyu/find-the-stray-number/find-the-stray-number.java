import java.util.*;
class Solution {
  static int stray(int[] numbers) {
    Arrays.sort(numbers);
      if(numbers[0] != numbers[1]){
        return numbers[0];
      }
    return numbers[numbers.length - 1];
  }
}