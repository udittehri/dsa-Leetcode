/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let index = 0
    for (var i = 0; i < nums.length; i++) {
        if (target == nums[i]) return i
        else if (target > nums[i] && (target < nums[i + 1] || nums[i + 1] == undefined)) {
            index = i + 1
            return i + 1
        }
    }

    return index

};
// @lc code=end
