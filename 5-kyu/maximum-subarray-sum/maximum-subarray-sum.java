public class Max {
  public static int sequence(int[] arr) {
​
    int maxSoFar = 0;
    int currentSum = 0;
​
    for (int i = 0; i < arr.length; i++) {
      currentSum += arr[i];
​
      if (currentSum < 0) {
        currentSum = 0;
      }
​
      if (currentSum > maxSoFar) {
        maxSoFar = currentSum;
      }
    }
​
    return maxSoFar;
  }
}
​