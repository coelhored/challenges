String.prototype.toJadenCase = function () {
    const arr = this.split(' ')
                    .map((word) => { return word[0].toUpperCase() + word.slice(1)})
                    .join(' ')
    return arr 
  };