/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let isMatch = -1;
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0] && isMatch == -1) {
            if (haystack.slice(i, i + needle.length) == needle) isMatch = i
        }

    }
    return isMatch

};
// @lc code=end
