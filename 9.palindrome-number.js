/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = String(x)
    let start = 0
    let end = x.length - 1
    let seriously = true;

    while (seriously) {
        if (x[start] != x[end]) {
            seriously = false;
            return seriously
        }
        else if (start == end || end == x.length / 2) return seriously;
        else {
            start++;
            end--;
        }
        // return
    }
    return seriously
};
// @lc code=end
