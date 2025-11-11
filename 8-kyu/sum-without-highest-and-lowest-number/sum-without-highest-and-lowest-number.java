import java.util.*;
public class Kata
{
  public static int sum(int[] numbers)
  {
    if(numbers == null || numbers.length <= 1) return 0;
    Arrays.sort(numbers);
    return Arrays.stream(numbers).skip(1).limit(numbers.length-2).sum();
  }
}