/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let finalArray = new Array();
    finalArray.push(nums[0])
    console.log(nums.length)
    nums.map((element, index) => {
        if ((element > nums[index - 1]))
            finalArray.push(element)
    })
    let pussyArray = new Array(nums.length - finalArray.length);
    pussyArray.fill('_')
    let k = finalArray.length
    finalArray = finalArray.concat(pussyArray)
    nums = finalArray
    console.log(finalArray, nums, pussyArray.length, pussyArray, k, finalArray.length, nums.length)
    return k
    // console.log(finalArray.push(pussyArray))
};
// @lc code=end
removeDuplicates([1, 1, 2])

