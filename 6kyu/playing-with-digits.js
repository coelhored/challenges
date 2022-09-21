function digPow(n, p){
  
    const digits = n.toString()
    const digitsArray = []
    let sum = 0
    //put the digits into an array
    for (digit of digits) {
      digitsArray.push(Number(digit))
    }
   // calculate the sum as per the formula  (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) 
   for (i=0; i<digitsArray.length; i++) {
     sum += digitsArray[i]**p
     p++
   }
    //check if k is an integer
   const k = sum/n
   return Number.isInteger(k) ? k : -1