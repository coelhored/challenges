function towerBuilder(nFloors) {
    const star = "*"
    const space = " "
    let stars = 1
    let spaces = (nFloors-1) 
    const arr = Array(nFloors).fill()
    for (let i = 0; i < arr.length; i++) {
      arr[i] = space.repeat(spaces) + star.repeat(stars) + space.repeat(spaces)
      stars += 2
      spaces -= 1
    }
    return arr
  }