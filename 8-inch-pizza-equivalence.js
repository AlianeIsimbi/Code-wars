function howManyPizzas(n) {
    let radius = n / 2;
    let measure = radius ** 2 / 16;
    let slices; 
  
    if (n < 8) {
      slices = Math.round(measure * 8);
      return `pizzas: 0, slices: ${slices}`;
    } else if (Math.floor(measure) !== measure) {
      let fullPizzas = Math.floor(measure);
      slices = Math.round((measure - fullPizzas) * 8);
      return `pizzas: ${fullPizzas}, slices: ${slices}`;
    } else {
      slices = 0;
      return `pizzas: ${measure}, slices: ${slices}`;
    }
  }