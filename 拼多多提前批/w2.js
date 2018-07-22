var arr = [1,2,4,4,3,3,1,5,3];
function findDupEle(arr){
    var res = arr.filter(function(item, idx, arr){
        return arr.indexOf(item) !== arr.lastIndexOf(item);
    });

    return [...new Set(res)];
}
console.log(findDupEle(arr))

let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log()