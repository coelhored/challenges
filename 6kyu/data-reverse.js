function dataReverse(data) {
    const dataCopy = data
    let result = []
    while (dataCopy.length > 0) {
    result.unshift(...dataCopy.splice(0,8))
    }
    return result
  }