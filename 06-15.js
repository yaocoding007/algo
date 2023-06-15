
/**
 * 20. 有效的括号
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
function valid(left, right) {
    if(left === '(' && right === ')') {
        return true
    }
    if(left === '{' && right === '}') {
        return true
    }
    if(left === '[' && right === ']') {
        return true
    }
    return false
}


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    // 拆解成队列
    let list = s.split('')
    for(let i = 0; i < list.length; i++) {
        const lastOne = stack[stack.length - 1]
        const curr = list[i]
        if(valid(lastOne, curr)) {
            // 出栈
            stack.pop()
        }else {
            // 进栈
            stack.push(curr)
        }
    }
    return stack.length === 0

};

let s = "()[]{}";

/**
 * 将每个放入到栈中 跟后面一个比较 
 * 若配对 则出栈
 * 若不配对 进栈
 * 直到 list 为空
 * 栈也为空 说明合法
 * 否则不合法
 */







console.log('lly-log -- s --->', isValid(s));