function sortNumber(){  //排序函数 
    var arr = [1,2,3,4,5,6,7,8,9,10];
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            arr.sort((a,b)=>{
                return a-b;
            })
            resolve(arr);
        },1000)
    })
}
