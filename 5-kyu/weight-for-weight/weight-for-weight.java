public class WeightSort {
​
    public static String orderWeight(String strng) {
        strng = strng.trim();
        if (strng.equals("")) return "";
        String[] arr = strng.split(" ");
        for (int i = 0; i < arr.length; i++) {
​
            for (int j = i + 1; j < arr.length; j++) {
​
                int weight1 = digitSum(arr[i]);
                int weight2 = digitSum(arr[j]);
​
                if (weight1 > weight2 ||
                   (weight1 == weight2 && arr[i].compareTo(arr[j]) > 0)) {
​
                    String temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        String result = "";
​
        for (int i = 0; i < arr.length; i++) {
            result += arr[i];
​
            if (i != arr.length - 1) {
                result += " ";
            }
        }
        return result;
    }
    private static int digitSum(String s) {
​
        int sum = 0;
​
        for (int i = 0; i < s.length(); i++) {
            sum += Character.getNumericValue(s.charAt(i));
        }
        return sum;
    }
}
​