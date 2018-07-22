/** 问题：创建10个`<a>`标签，点击时弹出相应的序号
 * 要点：使用闭包
 */

// 错误写法，弹出都是10
var i, a
for(i = 0; i < 10; ++i) {
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function (e) {
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}

// 正确的写法
var i
for(i = 0; i < 10; ++i){
    (function(i) {
        var a = document.createElement('a')
        a.innerHTML = i + '<br>'
        a.addEventListener('click', function(e){
            e.preventDefault()
            alert(i)
        })
        document.body.appendChild(a)
    })(i)
}
