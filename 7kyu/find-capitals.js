var capitals = function (word) {
    const result = []
    word.split('').forEach((x,i) => {
      if (x.match(/[A-Z]/g)) {
        result.push(i)
      }
    })
    return result
  };