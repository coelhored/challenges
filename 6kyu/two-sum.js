function twoSum(numbers, target) {
    // iterate through array 
     //test for current index plus (iterate through the remainder of the array) = target
     let result = []
     numbers.forEach((x,i) => {
       for (let j = i+1; j < numbers.length; j++) {
         if ( numbers[i] + numbers[j] === target ) {
           result = [i,j]
         }
       }
     })
     return result
   }