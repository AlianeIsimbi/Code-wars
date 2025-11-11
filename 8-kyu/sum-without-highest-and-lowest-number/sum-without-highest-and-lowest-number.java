import java.util.*;
public class Kata
{
  public static int sum(int[] numbers)
  {
    if(numbers == null || numbers.length <= 1){
      return 0;
    }
    Arrays.sort(numbers);
    
    ArrayList<Integer> list = new ArrayList<>();
    for(int n: numbers){
      list.add(n);
    }
    list.remove(0);
    list.remove(list.size() - 1);
    
    int sum = 0;
    for(int i = 0; i<list.size(); i++){
      sum += list.get(i);
    }
    
    return sum;
  }
}