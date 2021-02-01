/* 
实现 sum 函数使得以下表达式的值正确
sum(1, 2, 3).sumOf(); //6
sum(2, 3)(2).sumOf(); //7
sum(1)(2)(3)(4).sumOf(); //10
sum(2)(4, 1)(2).sumOf(); //9
*/

function sum() {
    let add = Array.from(arguments).reduce((a, b) => a + b, 0);
    function fn() {
        add += Array.from(arguments).reduce((a, b) => a + b, 0);
        return fn;
    }
    fn.sumOf = function () {
        return add;
    }
    return fn;
}

console.log(sum(1, 2, 3).sumOf());
console.log(sum(2, 3)(2).sumOf());
console.log(sum(1)(2)(3)(4).sumOf());
console.log(sum(2)(4, 1)(2).sumOf());