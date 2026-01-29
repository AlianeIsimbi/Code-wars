public class Solution {
​
  public static int solveSuperMarketQueue(int[] customers, int n) {
    if (customers.length == 0) return 0;
    
    int[] tills = new int[n];
    for (int customer : customers) {
      int minTillIndex = 0;
​
      for (int i = 1; i < n; i++) {
        if (tills[i] < tills[minTillIndex]) {
          minTillIndex = i;
        }
      }
      tills[minTillIndex] += customer;
    }
    int max = 0;
    for (int time : tills) {
      if (time > max) {
        max = time;
      }
    }
    return max;
  }
}
​