/** 
 * 445. 两数相加 II
 * https://leetcode.cn/problems/add-two-numbers-ii/description/
 */

const {
    generateLinkedListMockData,
    getLinksValue
} = require('./index')

const l1 = generateLinkedListMockData([7,2,4,3])
const l2 = generateLinkedListMockData([5,6,4])

// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
// 输出：[7,8,0,7]

// 最大的数字是在最前面的 但是数字相加的时候是从最后面开始的

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const arr1 = getLinksValue(l1);
    const arr2 = getLinksValue(l2);
    const len1 = arr1.length, len2 = arr2.length;

    let len = 0;
    if(len1 > len2) {
        len = len1;
        arr2.unshift(...new Array(len1 - len2).fill(0))
    }else {
        len = len2;
        arr1.unshift(...new Array(len2 - len1).fill(0))
    }

    let carry = 0;
    let res = []

    for(let i = len - 1; i >= 0; i--) {
        let num1 = arr1[i] || 0;
        let num2 = arr2[i] || 0;
        let curr = num1 + num2 + carry;
        if(curr >= 10) {
            carry = 1;
            curr = curr - 10;
        }else {
            carry = 0;
        }
        res.unshift(curr)
    }
    return res;
};

const res = addTwoNumbers(l1, l2)

console.log('lly-log -- res --->', res);