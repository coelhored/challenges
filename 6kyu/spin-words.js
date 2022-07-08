function spinWords(string){
    function reverse(word) {
      return word.split('').reverse().join('')
    }
    
   return string.split(' ')
                    .map(x => {
                      if (x.length >= 5) {
                        return reverse(x)
                      } else {
                        return x
                      }
                    })
                    .join(' ')
  
  }