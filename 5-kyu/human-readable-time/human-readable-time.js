function humanReadable (seconds) {
  let hh = 00,
      mm = 00,
      ss = 00;
  if(seconds >= 3600){
    hh += Math.floor(seconds/3600);
    seconds -= hh * 3600;
  }
  if(seconds >= 60){
    mm += Math.floor(seconds/60);
    seconds -= mm * 60;
  }
    ss += seconds;
    hh = hh < 10 ? '0' + hh : hh;
    mm = mm < 10 ? '0' + mm : mm;
    ss = ss < 10 ? '0' + ss : ss;
    
  return hh + ':' + mm + ':' + ss;
}