public class ASum {
    
    public static long findNb(long m) {
        long n = 0;
        long sum = 0;
​
        while (sum < m) {
            n++;
            sum += (long) n * n * n;
        }
        
        return sum == m ? n : -1;
    }
}
​