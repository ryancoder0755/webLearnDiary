// function fn(name='张三'){
//     console.log(name);
// }
// fn(0);
// var a =1;

// for(var i=0;i<10;i++){
//     (function($i){
//         setTimeout(function(){
//         console.log($i);
//     },300)
//     })(i)
// }//var使用闭包,利用函数作用域实现let的效果
// //let 
// for(let i=0;i<10;i++){
//     setTimeout(function(){
//         console.log(i);
//     },300)
// }

// const arr = [1,2,3];
// arr[1] = 4;
// console.log(arr);
// const obj ={
//     name:'lai',
// }
// obj.name = 'chen'; //'chen'
// console.log(obj)
// var a = 'hello \ world'
// console.log(a);
// var b= 'hello \n' + 'world'
// console.log(b);
// var d = 'hello' + 
//     	'world'
//         console.log(d)
// let c = `hello
// world`
// console.log(c)

// var name = '张三';
// var str ='欢迎'+ name +'同学,学习vue'
// console.log(str);
// //es6
// let name2 = '李四';
// let str2 = `欢迎${name2}同学,学习vue`;
// console.log(str2);
// let price = 10;
// let amount = 3;
// let text = `商品价格:${price},数量:${amount},小计:${(price*amount).toFixed(2)}元`
// console.log(text)
// let obj = {
//     name:'lai',
//     age:18,
//     sayName(){
//         return `${this.name}今年${this.age}岁了!`
//     },
//     friend:[
//         {
//             name:'小程',
//             age:12
//         },
//         {
//             name:'小黄',
//             age:20,
//         },{
//             name:'小王',
//             age:21
//         }
//     ]
// }
// let obj2 = {...obj};
// obj2.name = 'chen'
// console.log(obj2)
// console.log(obj)
let arr  = [1,2,3,4,5,76]
let obj = {
    name:'lai',
    age:18
}
let obj2 = {...obj};//对象的浅拷贝
obj2.name = "chen";
obj2.age = 20;
// console.log(obj2)
let obttt = {
    uid:1,
    shop_id:20
}
let obj3 = {...obj2,...obj};
let data = {...obj2,...obttt}
console.log(obj3)
console.log(data)
// function checkType(item){
//     return Object.prototype.toString.call(item).slice(8,-1);
// }
// function deepCopy(item){
//     let newOne = item.constructor === Array ? [] : {};
//     for(let i in item){
//         if(item[i] && typeof(item[i]) === 'object'){
//             newOne[i] = deepCopy(item[i]);
//         }else{
//             newOne[i] = item[i];
//         }
//     }
//     return newOne;
// }
// let obj3 = deepCopy(obj);
// obj3.name = 'liu';
// obj3.friend[1] = {
//     name:"戴思拓",
//     age:30,
// }
// obj3.sayName = function (){
//     return `这是已经更改后的内容,${this.name}`
// }
// console.log(obj3.friend.constructor === Array);
// console.log(obj3.sayName());

let arr1 = [1,2,3]
let arr2 = [3,4,5,6];
console.log([...arr1,...arr2])