// let arr = [-1,0,2,4,5,6,7];
// let len = arr.length;
// let result = Math.ceil(len/2);
// console.log(arr[1] == 0)
// for(let i=0;i< len; i++){
//     console.log('第'+i+'次')
// }


//冒泡排序  时间复杂度O(n^2)
// function bubbleSort(arr){
//     let len = arr.length;
//     for(let i=0;i<len;i++){
//         for(let j=0;j<len-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
//两数之和  时间复杂度O(n)
// function twoSum(arr,target){
//     let len = arr.length;
//     for(let i=0;i<len;i++){
//         for(let j=i+1;j<len;j++){
//             if(arr[i]+arr[j] == target){
//                 return [i,j];
//             }
//         }
//     }
// }
//手写Promise 时间复杂度O(n)
// function Commitment(fn){
//     let self = this;
//     self.status = 'pending';
//     self.value = undefined;
//     self.reason = undefined;
//     self.onResolvedCallback = [];
//     self.onRejectedCallback = [];
//     function resolve(value){
//         if(self.status == 'pending'){
//             self.status = 'resolved';
//             self.value = value;
//             self.onResolvedCallback.forEach(item=>{
//                 item();
//             })
//         }
//     }
//     function reject(reason){
//         if(self.status == 'pending'){
//             self.status = 'rejected';
//             self.reason = reason;
//             self.onRejectedCallback.forEach(item=>{
//                 item();
//             })
//         }
//     }
//     function then(onResolved,onRejected){
//         if(self.status == 'resolved'){
//             onResolved(self.value);
//         }
//         if(self.status == 'rejected'){
//             onRejected(self.reason);
//         }
//         if(self.status == 'pending'){
//             self.onResolvedCallback.push(function(){
//                 onResolved(self.value);
//             })
//             self.onRejectedCallback.push(function(){
//                 onRejected(self.reason);
//             })
//         }
//     }
//     fn(resolve,reject);
// }

// let commitment = new Commitment((res,rej)=>{
//     setTimeout(()=>{
//         res('我是一个提交的内容');
//     },1000)
// })
// commitment.then(result=>{
//     console.log('测试一下哈',result)
// })

//手写promise完整版.js
// class Commitment {
//   constructor(fn) {
//     this.status = 'pending'; 
//     this.value = undefined;  
//     this.reason = undefined; 
//     this.onResolvedCallback = [];
//     this.onRejectedCallback = [];
//     function resolve(value) {    
//       if (this.status === 'pending') {
//         this.status = 'resolved';
//         this.value = value;
//         this.onResolvedCallback.forEach(item => {
//           item();
//         });
//       }
//     }
//     function reject(reason) {
//         if (this.status === 'pending') {
//             this.status = 'rejected';
//             this.reason = reason;
//             this.onRejectedCallback.forEach(item => {
//             item();
//             });
//         }
//         }
//     function then(onResolved, onRejected) {
//         if (this.status === 'resolved') {
//             onResolved(this.value);
//         }
//         if (this.status === 'rejected') {
//             onRejected(this.reason);
//         }
//         if (this.status === 'pending') {
//             this.onResolvedCallback.push(function() {
//                 onResolved(this.value);
//             });
//             this.onRejectedCallback.push(function() {
//                 onRejected(this.reason);
//             });
//         }
//     }
//     fn(resolve, reject);
//     }
// }
// let commitment = new Commitment((res,rej)=>{
//     setTimeout(()=>{
//         res('我是一个提交的内容');
//     },1000)
// })
// commitment.then(result=>{
//     console.log('测试一下哈',result)
// })


//deep copy
function deepCopy(obj){
    let newObj = Array.isArray(obj)?[]:{};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === 'object'){
                newObj[key] = deepCopy(obj[key]);
            }else{
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
let obj = {
    name:'zhangsan',
    age:18,
    sayName(){
        console.log(this.name,this.age);
        return this.name;
    },
    arr:[1,2,3,4,5],
}
let newO = deepCopy(obj);
console.log(newO.sayName());
newO.name = 'lisi';
console.log('111',newO.name);
console.log('222',obj.name);
var search = function(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        const num = nums[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};
