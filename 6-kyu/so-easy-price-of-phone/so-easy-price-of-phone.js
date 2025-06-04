function salePrice(cost){
  let items= cost.split('\n')
  for(let i = 0; i < items.length; i++){
    let str,
        cost;
    str = items[i].split("$")[0].trim()
    cost = items[i].split("$")[1] 
    let salePrice = Math.ceil(Math.round(cost * 115 / 100) / 5) * 5
    str = str.replace('cost', 'sale')
    items[i] = str + " $" + salePrice
  }
  return items.join("\n")
}