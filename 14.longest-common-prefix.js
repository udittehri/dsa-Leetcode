/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let index = 0;
    let isCommon = true
    let output = ""
    while (isCommon) {
        let alpha = strs[0][index]

        strs.map(edx => {
            if (!edx[index] || edx[index] != alpha) {
                isCommon = false
                return
            }
        })
        if (isCommon)
            output += alpha
        index++;
    }
    return output


};
// @lc code=end



// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
