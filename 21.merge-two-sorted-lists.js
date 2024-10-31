/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    console.log("mergeTwoLists", typeof (list1))
    let finalArray = []
    let list1Index = 0;
    let list2Index = 0;
    let maxLength = list2.length;
    if (list1.length >= list2.length) maxLength = list1.length
    // console.log(list1Index, maxLength)

    while (list1Index < maxLength) {
        // console.log(list1[list1Index], list2[list2Index])
        if (list1[list1Index] > list2[list2Index]) {
            finalArray.push(list2[list2Index]);
            list2Index++
        }
        else if (list1[list1Index] < list2[list2Index]) {
            finalArray.push(list1[list1Index])
            list1Index++
        }
        else {
            finalArray.push(list2[list2Index]);
            finalArray.push(list1[list1Index])
            list2Index++
            list1Index++
        }
        // console.log(finalArray)

    }
    console.log(finalArray)
    return finalArray

};
// @lc code=end
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
