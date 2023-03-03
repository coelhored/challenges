/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    //convert the integer into a string to get the individual digits
    let stringn = n.toString()
    const stringArray = []

    // put the digits into an array
    for (let digit of stringn) {
        stringArray.push(Number(digit))
    }
    // find the product of the digits
    const product = stringArray.reduce((a,b) => a * b)

    //find the sum of the digits
    const sum = stringArray.reduce((a,b) => a + b, 0)

    //return the difference of the product and sum
    return product - sum  
};