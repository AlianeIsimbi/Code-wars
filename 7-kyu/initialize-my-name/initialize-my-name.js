function initializeNames(name){
   let arr = name.split(' ');
   for (i = 1; i < arr.length - 1; i++) 
       arr[i] = arr[i].charAt(0) + '.';
   return arr.join(' ');
}