function doubleChar(str) {
    let result = []
    
    for (let char of str) {
      result.push(char)
      result.push(char)
    }
      console.log(result)
      return result.join("")
    }