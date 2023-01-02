function shortcut (string) {
    let vowels = new Set(["a", "e", "i", "o", "u"])
  return result = string.split('').filter(letter => !vowels.has(letter)).join("")
  }