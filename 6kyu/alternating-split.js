function encrypt(text, n) {
    if (!text || n < 0) return text;
    for (let i = 0; i < n; i++) {
      console.log(text, n)
      text = text.split('');
      let evens = '';
      let odds = '';
      text.forEach((x,i) => i % 2 == 0 ? evens += x : odds += x)
      text = odds + evens
      console.log(text)
    }
    return text;
    }
    
  function decrypt(encryptedText, n) {
    if (!encryptedText || n < 0) return encryptedText;
    let decrypting = [];
    let length = 0;
    for (let i = 0; i < n; i++) {
      decrypting = [];
      console.log(encryptedText,n)
      length = encryptedText.length
      arr = encryptedText.split('')
  //     split array in half
      let odds = arr.splice(0, Math.floor(length/2));
      let evens = arr;
      console.log(odds, evens)
  //     push alternating elements from evens and odds into decrypting array
      for (let i = 0; i < length; i++) {
        if (evens) decrypting.push(evens.shift())
        if (odds) decrypting.push(odds.shift())
      }
      encryptedText = decrypting.join('')
    }
    return encryptedText;
    }