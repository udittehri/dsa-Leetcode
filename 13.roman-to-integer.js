/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let lastNumber = 0
    let map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let finalNumber = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (lastNumber <= map[s[i]]) {
            finalNumber += map[s[i]]
        }
        else finalNumber -= map[s[i]]
        lastNumber = map[s[i]]

    }
    return finalNumber
};

// @lc code=end

