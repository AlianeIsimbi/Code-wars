public class Kata
{
  public static int dontGiveMeFive(int start, int end)
  {
    int count = 0;
    int x = start;
    while(x <= end){
      if(!String.valueOf(x).contains("5")){
        count++; 
      }
      x++;
    }
    return count;
  }
}