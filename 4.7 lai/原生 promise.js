// console.log('第一步')
// let promise = new Promise((resolve,reject)=>{
//     console.log('第二步');
//     setTimeout(()=>{
//         resolve('这次一定');
//         console.log('第四步');
         
//     });
//    throw new Error('白嫖不成功');
// });
// promise.then(
//     result => {
//         return new Promise((res,rej)=>{
//             res('下次也不一定')
//         })
//         console.log(result);
//     },
//     result => {console.log(result.message)}
// ).then(
//     result =>{
//         console.log(result);
//     },
//     result =>{
//         console.log(result.message);
//     }
// )
// console.log('第三步')
// setTimeout(()=>{
//     console.log('这必定是最后一步')
// })
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(333);
    }, 1000)
});
p.then(res => {
    console.log(res);
    setTimeout(() => {
        console.log('----睡觉睡觉睡觉');
        return '----睡觉睡觉睡觉'
    }, 4000);
    console.log('----hhh');
}).then(res => {
    console.log(res);
})