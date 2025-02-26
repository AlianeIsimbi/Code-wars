function friend(friends){
  let onlyFriends = [];
  for(i = 0; i<friends.length; i++){
    if(friends[i].length === 4){
      onlyFriends.push(friends[i]);
    }
  }
  return onlyFriends;
}