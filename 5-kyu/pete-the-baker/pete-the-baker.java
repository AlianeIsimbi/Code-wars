import java.util.Map;
​
public class PeteBaker {
  public static int cakes(Map<String, Integer> recipe, Map<String, Integer> available) {
​
    int maxCakes = Integer.MAX_VALUE;
​
    for (String ingredient : recipe.keySet()) {
​
      int availableAmount = available.getOrDefault(ingredient, 0);
      int neededAmount = recipe.get(ingredient);
      int possibleCakes = availableAmount / neededAmount;
      if (possibleCakes < maxCakes) {
        maxCakes = possibleCakes;
      }
    }
    return maxCakes;
  }
}
​