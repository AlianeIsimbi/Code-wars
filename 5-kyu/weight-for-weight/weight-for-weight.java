import java.util.Comparator;
import java.util.Arrays;
​
public class WeightSort {
  public static String orderWeight(String string) {
    String[] split = string.split(" ");
    Arrays.sort(split, new Comparator<String>() {
      public int compare(String a, String b) {
        int aWeight = a.chars().map(c -> Character.getNumericValue(c)).sum();
        int bWeight = b.chars().map(c -> Character.getNumericValue(c)).sum();
        return aWeight - bWeight != 0 ? aWeight - bWeight : a.compareTo(b);
      }
    });
    return String.join(" ", split);
  }
}
​