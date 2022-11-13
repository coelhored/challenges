function reverseWords(str) {
    const words = str.split(" ");
   
    const reversed = words.map((word) => {return word.split("").reverse().join("")})
    return reversed.join(" ")
  }