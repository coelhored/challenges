/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result
    // loop through each element
    let i = 0;
    while (!result && i < nums.length){
         // check if that element plus each element other than itself are equal to target
        for (let j = 0; j < nums.length; j++){
            if ( nums[i] + nums[j] == target && i !== j){
               result = new Array(i,j)
            }
        }
    i++    
    }
    return result
};