function maskify(cc) {
  let fourLast = cc.slice(-4);
  let others = cc.slice(0, -4).replace(/./g, '#');
  
  return `${others}${fourLast}`;
​
}
​