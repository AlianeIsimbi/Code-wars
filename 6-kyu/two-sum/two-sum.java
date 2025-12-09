public class Solution {
    public static int[] twoSum(int[] numbers, int target) {
      int sum;
      for(int i = 0; i<numbers.length; i++){
        for(int j = 0; j<numbers.length; j++){
          if(i != j){
            sum = numbers[i] + numbers[j];
            
            if(sum == target){
              return new int[]{i, j};
            }
          }    
          
        }
      }
        return null; 
    }
}