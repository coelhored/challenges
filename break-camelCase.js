function solution(string) {
    const array = string.split("").map(element => {
      if (element == element.toUpperCase()){
          element = (" " + element)
      }
    return element
    })
    return array.join("")
}