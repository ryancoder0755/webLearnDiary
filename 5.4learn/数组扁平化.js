//1)递归函数实现
// function flatten(arr){
//     let result = [];
//     for(let i in arr){
//        if(Array.isArray(arr[i])){
//         result = result.concat(flatten(arr[i]));
//     }else{
//         result.push(arr[i]);
//     }
//     }
//     return result; 
// }
// let test = [1,[2,34,[12,4]],23];
// console.log(flatten(test));

//2)使用reduce函数进行递归操作
// function flatten(arr){
//     // let result = [];
//     return arr.reduce(function (total,currentValue,currentIndex,arr){
//         if(Array.isArray(currentValue)){
//            return  total.concat(flatten(currentValue));
//         }else{
//            return total.concat(currentValue);
//         }
//     },[])
// }
//3)while循环结合findIndex与扩展运算符
// function flatten(arr){
//     let result = [];
//     while(arr.findIndex(item=>{
//        return Array.isArray(item)
//     }) > 0
//     ){
        
//        arr = [].concat(...arr)
//     }
//     return arr
// }
// let test = [1,2,34,[12,4],23];
// let res = test.findIndex(item=>Array.isArray(item))
// console.log(res);
// console.log(flatten(test));
// let array = [1,[2,34,[12,4]],23]
//3)some方法和ES6 扩展运算符;
// let arr =  [1,2,3,[2,3,[4,5,6]],4,100]
// let getNewArr = (arr)=>{
//     while(arr.some(item=>Array.isArray(item)>0)){
//         arr = [].concat(...arr)
//     }
//     return arr
// }
// console.log(getNewArr(arr))
//4)数组强制类型转换
// function flatten(array){
//    return array.toString().split(',').map(item=>Number(item)) // 'array.toString() 转换后的结果 1,2,34,12,4,23'
// }
// let array = [1,[2,34,[12,4]],23];
// console.log(flatten(array));
//5)使用JSON的函数和正则表达式
// function flatten(array){
//   let result = JSON.stringify(array).replace(/(\[|\])/g,'')
//   console.log(result)
//    result = '[' + result + ']';
//    return JSON.parse(result);
// }
// let array = [1,[2,34,[12,4]],23];
// let result = flatten(array);
// console.log(Array.isArray(result),result);
// 6)使用栈和扩展运算符的方式实现扁平化
// function flatten(arr){
//    let res = [];
//    const stack = [].concat(arr);
//    console.log(Array.isArray(stack));
//    // return stack;
//    while(stack.length >0 ){
//       console.log(stack.length,stack)
//       let item = stack.pop();
//       if(Array.isArray(item)){
//          stack.push(...item);
//       }else{
//          item != undefined && res.unshift(item);
//       }
//    }
//    return res;
// }
// function flatten(arr) {  
//    let res = [];  
//    const stack = arr;
//    // const stack = [].concat(arr); 
//    console.log('哈哈哈',stack) 
//    while (stack.length > 0) {  
//        console.log(stack.length,stack)  
//        const item = stack.shift();    
//        if (Array.isArray(item)) { 
//         // 用扩展运算符展开一层 
//              stack.unshift(...item);    
//            } else {  
//                item !== undefined && res.push(item); 
//            }  
//        }  
//        return res;
// }
let array =[1,[2,34,[12,4]],23];
console.log(flatten(array))
// 7)使用ES6中的flatten函数
// let array = [1,[2,34,[12,4]],23]
// function flatten(array){
//     return array.flat(Infinity)
// }
// console.log(flatten(array))
