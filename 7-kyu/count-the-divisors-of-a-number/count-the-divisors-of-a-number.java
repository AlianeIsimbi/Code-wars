public class FindDivisor {
​
  public long numberOfDivisors(int n) {
    int count = 0;
    int num = 1;
    while(num <= n){
      if(n % num == 0){
        count++;
      }
      num++;
    }
    return count;
  }
​
}