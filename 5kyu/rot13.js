function rot13(message){
 
    message = message.split('')  //split into array
    console.log(message)
    let changed = message.map( x => { //replace letter with charCode +13, if goes to end of alphabet, wrap around ()
      if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) { // lowercase letters
        let newCode = x.charCodeAt(0)+13;
        if (newCode > 122) { //for when letters get moved higher than charcode of z
        newCode -= 26;
        }
        return String.fromCharCode(newCode);
      } else if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90){ //uppercase letters
          let newCode = x.charCodeAt(0)+13;
          if (newCode > 90) { //for when letters get moved higher than charcode of Z
          newCode -= 26;
          }
          return String.fromCharCode(newCode);
        }else {
        return x;
      }
    })
    return changed.join('')
  }