public class Kata {
  public static String firstNonRepeatingLetter(String s) {
​
    for (int i = 0; i < s.length(); i++) {
      boolean repeated = false;
​
      for (int j = 0; j < s.length(); j++) {
        if (i != j &&
            Character.toLowerCase(s.charAt(i)) ==
            Character.toLowerCase(s.charAt(j))) {
​
          repeated = true;
          break;
        }
      }
​
      if (!repeated) {
        return String.valueOf(s.charAt(i));
      }
    }
​
    return "";
  }
}
​