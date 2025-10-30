public class Solution {
​
  public int solution(int number) {
    int sum = 0;
    int x = 0;
    while(x < number){
      if(x % 3 == 0 || x % 5 == 0){
        sum += x;
      }
        x++;
    }
    return sum;
  }
}