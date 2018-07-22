// 题目：描述new一个对象的过程
/**
 * 创建一个新对象
 * this 指向这个新对象
 * 执行代码，即对this赋值
 * 返回this
 */

function Foo(name, age) {
    this.name = name;
    this.age = age;
    this.class = 'class-1';
}

var f = new Foo('zhangsan', 20);
console.log(f);
