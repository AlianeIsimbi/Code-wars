import java.util.Arrays;
​
public class Remover {
​
  public static int[] removeSmallest(int[] numbers) {
    if (numbers == null || numbers.length == 0) {
      return new int[0];
    }
    int minIndex = 0;
    int minValue = numbers[0];
    for (int i = 1; i < numbers.length; i++) {
      if (numbers[i] < minValue) {
        minValue = numbers[i];
        minIndex = i;
      }
    }
​
    int[] result = new int[numbers.length - 1];
    for (int i = 0, k = 0; i < numbers.length; i++) {
      if (i == minIndex) 
        continue;
      result[k++] = numbers[i];
    }
    return result;
    }
}