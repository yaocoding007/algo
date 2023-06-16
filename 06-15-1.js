/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 1 <= n <= 45
 * n = 3 => 3
 * 1 阶 + 1 阶 + 1 阶
 * 1 阶 + 2 阶
 * 2 阶 + 1 阶
 */


/**
 * 像是排列组合
 *  1 -> 1
 *  2 -> 2 
 *  3 -> 3
 *  4 -> 
 *     1 1 1 1
 *     2 2 
 *     1 2 1
 *     1 1 2
 *     2 1 1
 */

// 看了答案 完全不是这回事啊

// 结果推倒出来的方程式  f(n) = f(n-1) + f(n-2) 这样的话 递归是最直接的解法了
// 方程的推导思路
// 每次只能是一阶或者两阶
// 那么要到达最后一阶 只有两种选择 倒数第一阶 或者 倒数第二阶

// 我们通过数学归纳法，先定义 f(n) 表示爬了n个阶梯有 f(n) 种方法，而题目的限定是你每次只能爬 1 个或者 2 个台阶，那么假设你已经爬了 n 阶楼梯，有 f(n) 种方法，那么到达这个状态，有两种可能：

// 你在 n-1 阶楼梯通过爬 1 个台阶到达 n 阶楼梯的位置，而你到达 n-1 阶楼梯时有 f(n-1) 种方法
// 你在 n-2 阶楼梯通过爬 2 个台阶到达 n 阶楼梯的位置，而你到达 n-2 阶楼梯时有 f(n-2) 种方法
// 因此，你到达 n 阶楼梯时，有 f(n) = f(n-1) + f(n-2) 种方法。

function climbStairs1(n) {
    if(n === 1) {
        return 1
    }
    if(n === 2) {
        return 2
    }
    return climbStairs1(n-1) + climbStairs1(n-2)
}

console.log('lly-log -- res --->', climbStairs1(6));

// 官方给出了 7 中 解法 。。。

