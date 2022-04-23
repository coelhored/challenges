function squareDigits(num){
    const numArray = String(num).split('')
    const squared = numArray.map(item => item = item ** 2).join('')
    return Number(squared);
  }