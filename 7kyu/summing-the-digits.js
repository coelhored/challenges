function sumDigits(number) {
    sum = 0
   for ( digit of String(Math.abs(number))) {
     sum += Number(digit)
   }
    return sum 
  }