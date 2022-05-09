// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {  
    result = {}
    const letters = string.split('')  //   split into array
    
    letters.forEach(letter => {  //   iterate over array, if item is not alreay a key, add it as a key and set value to 1
      if (!Object.keys(result).includes(letter)){ //   if it is already a key, add 1 to value
        result[letter] = 1
      } else {
        result[letter] += 1
      }
    })
  return result  //   return the object
  }