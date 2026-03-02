public class TenMinWalk {
  
  public static boolean isValid(char[] walk) {
    if (walk.length != 10) {
      return false;
    }  
    int north = 0;
    int south = 0;
    int east = 0;
    int west = 0;
    for (int i = 0; i < walk.length; i++) {    
      if (walk[i] == 'n') {
        north++;
      }
      else if (walk[i] == 's') {
        south++;
      }
      else if (walk[i] == 'e') {
        east++;
      }
      else if (walk[i] == 'w') {
        west++;
      }
    }
    if (north == south && east == west) {
      return true;
    }   
    return false;
  }
}