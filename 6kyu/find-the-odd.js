function findOdd(A) {
    if (A.length == 1) {   // if length = 1, return the value
      return A[0];
    }
    const sorted = A.sort(); //   sort the array
    let count = 1;
    let odd = 0;
    sorted.forEach( (x, i) => { //   iterate through the array, checking if element is equal to the next
      if (x === sorted[i+1]) {
        count ++;   // increment count of current value
      } else {
        count % 2 !== 0 ?  odd = x : count = 1;  //   when a new element appears, check if count is odd, if so return it
      }
    })
    return odd;
  }