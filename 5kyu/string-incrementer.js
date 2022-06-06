function incrementString (strng) {
    let num = strng.match(/\d+$/g)||0 // find the string of digits at the end, or return 0
    if (num === 0) return strng + "1" // if there is no digit at the end, just concat 1 and return
    num = num[0] // .match returns an array, we just want the first(only) element, not the array
    const numLength = num.length
    const newNum = (Number(num) + 1).toString().padStart(numLength, 0) //pad with zeros to keep the same number of zeros as we started with
    return strng.replace(num, newNum)
  }