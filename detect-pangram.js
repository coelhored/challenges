function isPangram(string){
    const uppered = string.toUpperCase().split("");
    const alphabet = Array.from(Array(26), (x,i) => String.fromCharCode(i + 65));
   console.log(uppered);
    let letterUsedCount = 0;
    for (let i = 0; i < alphabet.length; i++){
      if (uppered.includes(alphabet[i])) {
        letterUsedCount ++;
        }
      }
    console.log(letterUsedCount)
   return letterUsedCount == 26 ? true : false ;
  }