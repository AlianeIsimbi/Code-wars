public class WhichAreIn {
​
    public static String[] inArray(String[] array1, String[] array2) {
        String[] temp = new String[array1.length];
        int count = 0;
        for (int i = 0; i < array1.length; i++) {
            for (int j = 0; j < array2.length; j++) {
​
                if (array2[j].contains(array1[i])) {
                    temp[count] = array1[i];
                    count++;
                    break; 
                }
            }
        }
        String[] result = new String[count];
​
        for (int i = 0; i < count; i++) {
            result[i] = temp[i];
        }
        for (int i = 0; i < result.length - 1; i++) {
            for (int j = i + 1; j < result.length; j++) {
                if (result[i].compareTo(result[j]) > 0) {
                    String swap = result[i];
                    result[i] = result[j];
                    result[j] = swap;
                }
            }
        }
​
        return result;
    }
}
​
​
​