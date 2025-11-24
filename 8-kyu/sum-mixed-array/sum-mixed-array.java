import java.util.List;
​
public class MixedSum {
  public int sum(List<?> mixed) { 
    int sum = 0;
    for(int i = 0; i<mixed.size(); i++){
      sum += Integer.valueOf(mixed.get(i).toString());
    }
    return sum;
  }
}