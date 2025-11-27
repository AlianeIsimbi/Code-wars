public class BraceChecker {
​
  public boolean isValid(String braces) {
    char[] stack = new char[braces.length()];
    int top = -1;
    for (int i = 0; i < braces.length(); i++) {
      char c = braces.charAt(i);
      if (c == '(' || c == '{' || c == '[') {
        stack[++top] = c; 
      } else {
        if (top == -1) return false;
        char last = stack[top--];
        if (c == ')' && last != '(') return false;
        if (c == '}' && last != '{') return false;
        if (c == ']' && last != '[') return false;
      }
    }
    return top == -1; 
  }
​
}
​