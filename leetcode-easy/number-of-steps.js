/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0
    let remaining = num
    while (remaining > 0) {
        remaining % 2 === 0 ? remaining /= 2 : remaining--
        steps++
    }
    return steps
};