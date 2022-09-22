function hello(name) {
    if (!name) {
      return "Hello, World!"
    } else {
      const nameArray = Array.from(name.toLowerCase())
     nameArray[0] = nameArray[0].toUpperCase()
    const fixedName = nameArray.join('')
    return  "Hello, " + fixedName + "!"
    }
    
  }