function XO(str) {
    let x = 0
    let o = 0
    console.log(str)
    str = str.toLowerCase()
      for (const ch of str) {
        if (ch === 'x') {
          x += 1
        } else if (ch === 'o') {
          o += 1
        }
      }
    return x == o ? true : false
  }