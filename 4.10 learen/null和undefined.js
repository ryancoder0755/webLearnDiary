// undefined 原始值的初始值；未定义；
//1. 已声明未赋值的变量;
//2. 访问对象不存在的属性;
//3. 函数没有返回值的情况;
//4. 参数没有传入，实参没有传入， 获取形参；
// 
// var a;
// console.log(a);
// var a = {};
// console.log(a.b);

// function fn(a,b){
//     return a
// }
// console.log(fn())

// console.log(typeof undefined);
console.log(Boolean(undefined));  //false
console.log(String(undefined)); //undefined
console.log(Number(undefined)); //NaN



//null  对象的初始值，空对象的引用
console.log(typeof null); //object

console.log(Boolean(null));  //false
console.log(String(null)); //null
console.log(Number(null)); //0