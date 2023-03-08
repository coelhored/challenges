/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    /*  let output = []
     output[0] = nums[0]
     for (let i = 1; i < nums.length; i++) {
         output.push(nums[i] + output[i-1])
     } */
     sum = 0
     return nums.map(item => {
         return sum = sum + item
     })
     /* return output */
 };