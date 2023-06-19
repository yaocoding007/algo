/*
 * @lc app=leetcode.cn id=27 lang=javascript
 * @lcpr version=21909
 *
 * [27] 移除元素 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const n = nums.length;
    let left = 0;
    for(let right = 0; right < n; right++) {
        if(nums[right]!== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};
// @lc code=end

// 双指针解法

/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */

