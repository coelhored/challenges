
function listSquared(m, n) {
    console.log(m,n)
    //create the result array
    const result = []

    for (let i = m; i <= n; i++) {
   
      //square them and calculate the sum of them all
      const sumOfSquaredDivisors = findDivisors(i).reduce((a,b) => a + b**2, 0)
      
      //check if the square root of the sum is an integer
      if (Number.isInteger(Math.sqrt(sumOfSquaredDivisors))){
        
      //push the original integer and the sum of squares to the result array
        result.push([i,sumOfSquaredDivisors])
      }  
    }
  
    //for each integer, find all its divisors
  function findDivisors(number) {
      const divisors = []
      for ( let j = 1;  j <= number/2; j++) {
        if ( number%j == 0) {
          divisors.push(j)  
        }  
      }
    divisors.push(number)
    return divisors
  }
  //return the result array
  return result   
}
    