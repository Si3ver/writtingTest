/*

问答题2：实现密码校验。1.6~16位；2.字母和数字组成；3.忘记了...

*/

function check(pwd)
{
    if(pwd.length >= 6 && pwd.length <= 16){
        return /^([a-zA-Z0-9]){6,16}$/.test(pwd);
    }else{
        return false;
    }
}

// test
console.log(check('abcdef'));
console.log(check('123456'));
console.log(check('a4Z5x8sf9'));
console.log(check('a49'));
console.log(check('12_sdfwef'));

