function nbDig(n, d) {
    // use a loop get squares of numbers from 0 to n and put in an array called squares
    const squares = []
    for (i = 0; i <= n; i++) {
      squares.push((i**2).toString())
    }
     //split each element into digits in a new array called splitSquares
    const splitSquares = []
    squares.forEach(element => {
      for (const digit of element) {
      splitSquares.push(digit)
    }
   }) 
     //filter for d and get the length of the filter output
    return splitSquares.filter(x => x == d).length 
  }