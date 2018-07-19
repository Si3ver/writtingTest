# JavaScript

## 一、JS基础

### 1.1 基础的基础

+ 数据类型（typeof instaceof toString）
1. 数据类型：null undefined number string boolean object symbol bigint
2. typeof： undefined number string boolean object function
3. instanceof 根据原型链判断，返回ture/false
4. toString `[object xxx]` `function () { [native code] }`

+ 强制类型转换
1. 字符串拼接
2. == ，双等号要慎重使用，多用===
3. if ，强转成布尔类型
4. 逻辑运算符&& || ! !!
5. null undefined 0 '' false NaN 强转后为 false
6. {} 强转后为 true

+ 何时使用“==”
1. 仅仅判断null、undefined时，用“==”
2. 其余情况用“===”。

+ JS中的内置函数
1. 内置函数： Object Array Boolean Number String Function Date RegExp Error
2. 内置对象： Math JSON等

+ JS中值类型与引用类型
1. 都是值传递！
2. 值类型赋值后会存储一份值，引用类型共用一块内存。
3. 引用类型包括 Object、Array、Function

+ 如何理解JSON
1. 是JS对象，常用API包括 JSON.stringify  JSON.parse。
2. 是一种数据格式。

---其他补充---

+ 函数柯里化
+ 数组API
1. concat、slice
2. push、pop、shift、unshift、splice、sort

### 1.2 原型、原型链、作用域、闭包

- 构造函数
1. var a = {} 是 var a = new Object() 的语法糖
2. var a = [] 是 var a = new Array() 的语法糖
3. function Foo(){...} 是 var Foo = new Function(...) 的语法糖
4. 用instanceof判断一个函数是否是一个变量的构造函数

- 原型规则
1. 除null外，其他所有的引用类型（Array, Object, Function）都具有对象特性，能自由扩展属性。
2. 除null外，其他所有引用类型（Array, Object, Function）都具有`__proto__`（隐式原型）属性，属性值是一个普通对象。
3. 所有 Function ，都具有`prototype`（显式原型）属性，属性值是一个普通对象。
4. `__proto__` 指向它的构造函数的`prototype`属性。
5. 当试图访问一个对象的属性时，如果它没有这个属性，则会去它的`__proto__`中寻找。

+ prototype和_proto_的区别
+ 原型链、闭包，为什么要用闭包，内存回收机制
+ call、apply

补充：
+ 属性遍历
1. for item in f           旧版浏览器会拿到原型上的属性，新版不会
2. f.hasOwnProperty(item)  不会拿到原型上的属性

### 1.3 异步、单线程

## 二、JS API

### 2.1 DOM

### 2.2 Ajax

### 2.3 事件绑定

+ 事件委托

## 三、开发环境

## 3.1 版本管理git

## 3.2 模块化

## 3.3 打包工具

## 四、运行环境

### 4.1 页面渲染

+ 浏览器渲染过程

### 4.2 性能优化

## 五、面试技巧
