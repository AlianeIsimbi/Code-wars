function chineseZodiac(year){
  const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
  const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
  const diff = year - 1924;
  const animal = animals[diff % 12];
  const element = elements[Math.floor((diff % 10) / 2)];
  return `${element} ${animal}`;
}