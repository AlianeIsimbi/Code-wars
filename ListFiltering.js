function filter_list(l) {
    let newList = l.filter((a)=> typeof(a) === "number");
    return newList;
  }