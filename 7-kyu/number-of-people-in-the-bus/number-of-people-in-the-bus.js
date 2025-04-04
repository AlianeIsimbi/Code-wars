var number = function(busStops){
  let out = 0;
  let enter = 0;
  for(i = 0; i<busStops.length; i++){
    enter += busStops[i][0];
    out += busStops[i][1];
  }
  return enter - out;
}