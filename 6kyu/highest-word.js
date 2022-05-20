function high(x){

    //   initialize highest value variable
       let highestWord = "";
       let highestScore = 0;
     // split into array of words
       const wordList = x.split(" ");
   //   split each word into array of letters
     for (word of wordList) {
       score = 0
       for (letter of word) {
         score += (letter.charCodeAt(0)-96) //   use charCodeAt to get number, subtract the offset and add to the total for the word
       } if (score > highestScore) { //if this word score higher than the previous ones, set this one as the highest word
         highestScore = score; 
         highestWord = word;
       }
     }
   
   return highestWord;
    }