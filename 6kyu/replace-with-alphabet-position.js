function alphabetPosition(text) {
    //   split into array
    const textArray = text.toUpperCase().split("");
    
    //  for each element get charCode and convert charCode to alphabet position key
    const charCodes = textArray.map((x, i) =>  textArray[i].charCodeAt()-64 )
    
    // remove non letter elements
     const onlyLetterCodes = charCodes.filter(x => x >=1 && x <= 26)
    
    //   convert back to string
      const newText = onlyLetterCodes.join(" ")
      return newText;
    }

    // simplified
    function alphabetPosition(text) {
        //   split into array
     text = text.toUpperCase()
       .split("")
        //  for each element get charCode and convert charCode to alphabet position key
        .map((x) =>  x.charCodeAt()-64 )
        // remove non letter elements
        .filter(x => x >=1 && x <= 26)
        //   convert back to string
        .join(" ")
        return text;
    }