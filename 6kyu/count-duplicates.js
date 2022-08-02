function duplicateCount(text){
    text = text.toLowerCase();
    const counts = {}
    let duplicates = 0
    // add each letter to the counts object, and if it's already there, add 1 to its value
    for (letter of text) {
      counts[letter] ? counts[letter] += 1 : counts[letter] = 1
    }
    // iterate through the counts object, if the value is greatere than 1, increment duplicates
    for (letter in counts) {
      if (counts[letter] > 1) {
        duplicates += 1
      }
    }
    
  return duplicates
  }