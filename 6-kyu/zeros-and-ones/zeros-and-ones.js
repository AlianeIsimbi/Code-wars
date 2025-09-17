function replaceZero(arr) {
    let prevZero = -1, 
        prevPrevZero = -1,
        bestIndex = -1, 
        maxLen = 0;
​
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            let len = i - prevPrevZero;
            if (len >= maxLen) {
                maxLen = len;
                bestIndex = prevZero;
            }
            prevPrevZero = prevZero;
            prevZero = i;
        }
    }
    if (arr.length - prevPrevZero >= maxLen) {
        bestIndex = prevZero;
    }
    return bestIndex;
}
​