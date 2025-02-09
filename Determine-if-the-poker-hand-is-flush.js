function isFlush(cards) {
    let suit = cards[0].slice(-1);
    return cards.every((i)=>i.slice(-1) === suit)
   }