function printerError(s) {
    let bad = 0;
    const letterArray = s.split('')
    letterArray.forEach(c => {
       if (c.charCodeAt(0) < 97 || c.charCodeAt(0) > 109) {
         bad ++ ;
       }})
       return bad + "/" + s.length
  }


//   you can compare letters with > , so this way you don't need to create an array
  function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}