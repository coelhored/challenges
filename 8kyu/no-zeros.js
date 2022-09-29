function noBoringZeros(n) {
    const array = n.toString().split('')
    for (i=array.length-1; i > 0; i--){
      if (array[i] == 0) {
        array.pop()
      }else {
        break
      }
    }
      return Number(array.join(''))
    }