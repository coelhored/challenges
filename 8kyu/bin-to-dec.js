function binToDec(bin){
    const reversed = Array.from(bin).reverse()
    console.log(reversed)
    let sum = 0
    let place = 1
    reversed.forEach(x => { 
      sum += ( Number(x) * place);
      place *= 2
    })
    return sum
  }