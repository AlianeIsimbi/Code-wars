import java.util.ArrayList;
import java.util.List;
​
public class MexicanWave {
​
    public static String[] wave(String str) {
​
        List<String> result = new ArrayList<>();
​
        for (int i = 0; i < str.length(); i++) {
​
            if (str.charAt(i) == ' ') {
                continue; 
            }
​
            char[] chars = str.toCharArray();
            chars[i] = Character.toUpperCase(chars[i]);
​
            result.add(new String(chars));
        }
​
        return result.toArray(new String[0]);
    }
}
​