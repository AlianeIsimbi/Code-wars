public class ProdFib {
  
  public static long[] productFib(long prod) {
    long fn = 0;
    long fn1 = 1;
    int largestInt = Integer.MAX_VALUE;
    for(int i = 0; i<largestInt; i++){
         long product = fn * fn1;
​
            if (product == prod) {
                return new long[] { fn, fn1, 1 };
            }
​
            if (product > prod) {
                return new long[] { fn, fn1, 0 };
            }
​
            long next = fn + fn1;
            fn = fn1;
            fn1 = next;
        }
​
        return new long[] { fn, fn1, 0 };
   }
}