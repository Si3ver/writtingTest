// t2
const promise = new Promise((resolve, reject) => {
    console.log('a');
    resolve();
    console.log('b');
});
promise.then(()=>{
    console.log('c');
});
console.log('d');

//abdc

// t8
var ary = [0, 1, 2];
ary[10] = 10;
ary.filter(function(x){return x === undefined});

// tk1
pi = 0;
radius = 1;
function circumference(radius){
    radius = 3;
    pi = 3.14;
    console.log(2*pi*radius);
}
circumference(2);

// tk2
(function(x){
    return (function(y){
        console.log(x);
    })(2)
})(1);