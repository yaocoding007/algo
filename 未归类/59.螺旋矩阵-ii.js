/*
 * @lc app=leetcode.cn id=59 lang=javascript
 * @lcpr version=21909
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // 创建用于存储结果的 二维 数组
    let res = Array(n).fill(0).map(() => Array(n).fill(0))
    // 设置边际值
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    // 当前要填入的值
    let curVal = 1;
    // 模拟 填入
    while(curVal <= n * n) {
        // 从左到右
        for(let i = left; i <= right; i++) {
            // 第一行
            res[top][i] =  curVal++
        }
        top++; // 上边界下移

        // 从上到下
        for(let i = top; i <= bottom; i++) {
            // 最右边的列
            // res[right][i] = curVal++
            res[i][right] = curVal++
        }

        // 右边界左移
        right--;

        // 从右到左
        for(let i = right; i >= left; i--) {
            // 最底部的行
            res[bottom][i] = curVal++
        }

        // 下边界上移

        bottom--;

        // 从下到上

        for(let i = bottom; i >= top; i--) {
            // 左侧的列
            // res[left][i] = curVal++;
            res[i][left] = curVal++;
        }

        // 左边界右移

        left++;

    }

    return res

};
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */


