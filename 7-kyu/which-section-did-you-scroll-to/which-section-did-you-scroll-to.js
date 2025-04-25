// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY,sizes){
   let start = 0;
  for (let i = 0; i < sizes.length; i++) {
    const end = start + sizes[i] - 1;
    if (scrollY >= start && scrollY <= end) {
      return i;
    }
    start += sizes[i];
  }
  return -1; 
}