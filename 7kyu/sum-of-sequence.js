const sequenceSum = (begin, end, step) => {
    if (begin > end) {return 0}
    let count = begin
    let total = 0
    while (count <= end) {
      total += count
      count += step 
    }
    return total
  }