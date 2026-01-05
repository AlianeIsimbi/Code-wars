public class Kata {
    public static String expandedForm(int num) {
      String result = "";
      String numString = String.valueOf(num);
      int length = numString.length();
      
      for(int i = 0; i<length; i++){
        char c = numString.charAt(i);
        
        if(c == '0') continue;
        
        int zeros = length - i - 1;
        String part = c + "0".repeat(zeros);
        
        if(!result.isEmpty()){
          result += " + ";
        }  
        result += part;
      }
        return result;
    }
}