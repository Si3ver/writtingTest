// 题目：写一个原型链继承的例子
// 解析：即在构造函数的prototype属性上添加的方法，构造出来的对象能继承到且共用同一套方法。
function Elem(id) {
    this.elem = document.getElementById(id);
}

Elem.prototype.html = function(val) {
    var elem = this.elem;
    if (val) {
        elem.innerHTML = val;
        return this;
    }else {
        return elem.innerHTML;
    }
}

Elem.prototype.on = function (type, fn){
    var elem = this.elem;
    elem.addEventListener(type, fn);
    return this;
}

var div1 = new Elem('comments');
// console.log(div1.html());
// 链式操作
div1.html('<p>hello, weilin!</p>').on('click', function (){
    alert('clicked!');
}).html('abc').html('def');
