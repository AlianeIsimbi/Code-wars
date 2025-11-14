import java.util.*;
​
public class LineNumbering {
    public static List<String> number(List<String> lines) {
        if(lines.size() == 0){
          return new ArrayList<>();
        }
      List<String> result = new ArrayList<>();
      for(int i = 0, k = 1; i<lines.size(); i++){
        String formatted = String.format("%d: %s", k++, lines.get(i));
        result.add(formatted);    
      }
      return result;
    }
}