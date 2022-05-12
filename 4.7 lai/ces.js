const p = new Promise((resolve, reject) => {
    console.log('立刻马上')
    setTimeout(() => {
        resolve(333);
    }, 2000)
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
    return  new Promise((res,rej)=>{
        res('真的下次一定');
    })
}).then(res =>{
    console.log('这是最后一次了,',res)
})