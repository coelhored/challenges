function howMuchILoveYou(nbPetals) {
    let result
   switch (nbPetals % 6) {
    case 1 : result = "I love you";
       break;
    case 2 : result = "a little"
       break;
    case 3 : result = "a lot"
       break;
    case 4 : result = "passionately"
       break;
    case 5 : result = "madly"
       break;
    case 0 : result = "not at all"
       break;
       default: result = "didnt match any cases"
   }
    return result
  }