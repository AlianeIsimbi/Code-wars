import java.util.ArrayList;
import java.util.List;
​
class SumDigPower {    
    public static List<Long> sumDigPow(long a, long b) {      
        List<Long> result = new ArrayList<>();
        
        for (long num = a; num <= b; num++) {
            long sum = 0;
            long temp = num;
            
            String str = Long.toString(num);
            
            for (int i = 0; i < str.length(); i++) {                
                int digit = Character.getNumericValue(str.charAt(i));               
                sum += Math.pow(digit, i + 1);
            }           
            if (sum == num) {
                result.add(num);
            }
        }       
        return result;
    }
}