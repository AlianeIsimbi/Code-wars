class Solution{
    public static int repeats(int [] arr){
      int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            boolean isUnique = true;
            for (int j = 0; j < arr.length; j++) {
                if (i != j && arr[i] == arr[j]) {
                    isUnique = false;
                    break;            
                }
            }
            if (isUnique) {
                sum += arr[i];
            }
        }
        return sum;
    }
}