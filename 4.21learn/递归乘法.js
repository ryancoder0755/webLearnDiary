//递归乘法
// function multiply(x, y) {
//     if (y === 0) {
//         return 0;
//     }
//     if (y === 1) {
//         return x;
//     }
//     return x + multiply(x, y - 1);
// }

// 字符串
let str = '10101';
let num = 0;
for(let i = 0; i < str.length; i++) {
    if(str[i] === '1') {
        num ++
    }
}
console.log(num);