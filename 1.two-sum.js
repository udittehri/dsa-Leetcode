/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let index = []
    for (let i = 0; i < nums.length; i++) {
        // if (nums[i] + nums[i + 1] == target) {
        //     index = [i, i + 1]
        //     return
        // }
        // for (let j = i + 1; j < nums.length; j++) {
        //     if (nums[i] + nums[j] == target) {
        //         index = [i, j]
        //     }
        // }
        let hello = nums.indexOf(target - nums[i])
        console.log(hello)
        if (hello != -1 && i != hello) {
            console.log(i, hello, nums[i], nums[hello])
            index = [i, hello]

        }

    }
    console.log(index)
    return index
};
// @lc code=endxw
twoSum([3, 3], 6)

