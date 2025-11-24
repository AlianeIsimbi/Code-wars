import java.util.*;
import java.util.stream.*;
public class School{
​
  public static int getAverage(int[] marks){
    return (Arrays.stream(marks).sum())/marks.length;
  }
}