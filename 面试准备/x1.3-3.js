// 题目：闭包的使用场景和原理
/**
 * 场景1. 函数作为返回值
 * 场景2. 函数作为参数传递
 * 原理： 函数执行时，发现变量，会沿着其声明时的父级作用域链找
 */

function F1() {
    var a = 100
    return function () {
        console.log(a)
    }
}

var f1 = F1()
var a = 200
f1()        // 100

function F2(fn){
    var a = 500
    fn()
}
F2(f1)      // 100

