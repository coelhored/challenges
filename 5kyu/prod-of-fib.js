function productFib(prod){
    // calculate fibonacci sequence until last 2 numbers multiplied is larger than prod
  //   multiply n * n-1, if smaller than prod, calculate next fib, if equal return true
  //   else return false
   
    let fibArray = [0,1]
    let index = 0;
    while (fibArray[index] * fibArray[index+1] < prod) {
      fibArray.push(fibArray[index] + fibArray[index+1])
        index ++;
    }
    const result = fibArray.slice(-2);
    if (result[0] * result[1] == prod) {
      result.push(true)
    }else {
      result.push(false);
    }
    return result
  }