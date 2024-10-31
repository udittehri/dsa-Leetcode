/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let bTypeArray = [];
    for (let i = 0; i < s.length; i++) {
        // console.log(i, s[i])
        let ele = s[i]

        let isOpen = isOpeneBracket(ele)
        let isClose = isCloseBracket(ele);
        // console.log(ele, isOpen, isClose, bTypeArray);
        if (isOpen) {
            bTypeArray.push(isOpen)
        }
        else if (isClose) {
            if (bTypeArray[bTypeArray.length - 1] != isClose) {
                console.log("FUCK ME")
                return false;
            }
            else {
                bTypeArray.pop()
            }

        }
    }
    // console.log(bTypeArray)
    if (bTypeArray.length != 0)
        return false
    else return true
};
function isOpeneBracket(element) {
    switch (element) {
        case '(':
            return 1;
        case '[':
            return 2;
        case '{':
            return 3;
        default:
            return 0;
    }
}
{ { } }
function isCloseBracket(element) {
    switch (element) {
        case ')':
            return 1;
        case ']':
            return 2;
        case '}':
            return 3;
        default:
            return 0;

    }
}

// @lc code=end
// console.log(isValid("(){"))
