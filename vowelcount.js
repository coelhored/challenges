function getCount(str) {
    var vowelsCount = 0;
    
  str.split("").forEach(item => {
    if (item == "a" || item == "e" || item == "i" || item == "o" || item == "u") {
      vowelsCount ++;
    }
  })
    
    return vowelsCount;
  }