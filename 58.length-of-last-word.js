/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let lastSpace = false;
    let wordLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            if (lastSpace) wordLength = 0
            wordLength++;
            lastSpace = false
        }
        else {
            lastSpace = true;
        }
    }
    // s.split(' ').forEach(function (edx) {
    //     console.log(edx)
    // })
    return wordLength;
};
// @lc code=end

// lengthOfLastWord(" fly me   to   the moon ")
