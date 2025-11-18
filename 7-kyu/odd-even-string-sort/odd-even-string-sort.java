public class OddEvenSort {
  public static String sortMyString(String s) {
    String evenIndexed = "";
    String oddIndexed = " ";
    for(int i = 0; i<s.length(); i++){
      if(i % 2 == 0){
        evenIndexed += s.charAt(i);
      }else{
        oddIndexed += s.charAt(i);
      }
    }
  return evenIndexed.concat(oddIndexed);
  }
}