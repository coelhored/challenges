function disemvowel(str) {
    let vowels = /[aeiou]/ig
    return str.replace(vowels, "");
  }