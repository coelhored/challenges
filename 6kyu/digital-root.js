function digital_root(n) {

    function stringAndReduce(number) {
      let sum = 0
        for (const digit of String(number)) {
          sum += Number(digit)
        }
       return String(number).length > 1 ? stringAndReduce(sum) :  sum
      }
    return stringAndReduce(n)
  }