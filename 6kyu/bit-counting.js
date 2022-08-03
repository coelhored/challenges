var countBits = function(n) {
    let binary = n.toString(2)
    let count = 0
    for (digit of binary) {
      if (digit == 1) {
        count += 1
      }
    }
    return count
  };