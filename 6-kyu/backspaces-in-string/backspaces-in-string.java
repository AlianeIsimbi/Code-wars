public class BackspacesInString {
  public String cleanString(String s) {
    StringBuilder result = new StringBuilder();
​
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
​
      if (c == '#') {
        if (result.length() > 0) {
          result.deleteCharAt(result.length() - 1);
        }
      } else {
        result.append(c);
      }
    }
​
    return result.toString();
  }
}
​