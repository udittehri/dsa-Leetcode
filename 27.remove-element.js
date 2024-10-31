/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let output = []
    nums.map((edx) => {
        if (edx != val) output.push(edx)

    })
    nums = output
    console.log(output, nums)
    return output.length
};

// console.log(removeElement([3, 2, 2, 3], 3))
// @lc code=end



// let nums = [3, 2, 2, 3]; // Input array
// let val = 3// Value to remove
// let expectedNums = [2, 2]; // The expected answer with correct length.
// // It is sorted with no values equal to val.

// function removeElement(nums, val) {
//     let k = 0; // Initialize k to track the new length
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }
//     return k;
// }

// let k = removeElement(nums, val); // Calls your implementation
// console.log(k, "HII")
// console.assert(k === expectedNums.length, "Lengths do not match");
// // console.log(nums, nums.slice(0, k))
// // // Sort the first k elements of nums
// // console.log(nums.sort((a, b) => a - b))
// nums = nums.slice(0, k).sort((a, b) => a - b);
// console.log(nums, "LINE 51")
// for (let i = 0; i < k; i++) {
//     console.assert(nums[i] === expectedNums[i], `Mismatch at index ${i}`);
// }