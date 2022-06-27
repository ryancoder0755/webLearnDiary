
class Commitment {
    static PENGDING = '待定';
    static FULFILLED = '成功';  
    static REJECTED = '拒绝';
    constructor(executor){
        this.status = Commitment.PENGDING;
        this.result = null;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        try {
            executor(this.resolve.bind(this),this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }
    resolve(result) {
        setTimeout(()=>{
            if(this.status === Commitment.PENGDING){
            this.status = Commitment.FULFILLED;
            this.result = result;
            this.resolveCallbacks.forEach(callback =>{
                callback(result);
            });
        }
        })
    }
    reject(result) {
        setTimeout(()=>{
             if(this.status === Commitment.PENGDING){
            this.status = Commitment.REJECTED; 
            this.result = result;
            this.rejectCallbacks.forEach(callback =>{
                callback(result);
            });
        }
        })
       
    }
    then(onFULLFILLED,onREJECTED){
        return new Commitment((resolve,reject)=>{
            setTimeout(()=>{
                        onFULLFILLED = typeof(onFULLFILLED)=== 'function' ? onFULLFILLED : ()=>{};
                        onREJECTED = typeof(onREJECTED) === 'function' ? onREJECTED : ()=>{};
                        if(this.status === Commitment.PENGDING){

                                this.resolveCallbacks.push(onFULLFILLED);
                                this.rejectCallbacks.push(onREJECTED);
                            
                        }
                        if(this.status === Commitment.FULFILLED){
                            resolve(onFULLFILLED(this.result));
                        }
                        if(this.status === Commitment.REJECTED){
                            reject(onREJECTED(this.result));
                        }
                        },0)
            })
    }
}

console.log('第一步')

let commitment = new Commitment((resolve,reject)=>{
    console.log('第二步');
    setTimeout(()=>{
        resolve('这次一定');
        console.log('第四步');
    });
    
    // throw new Error('白嫖不成功');
});

commitment.then(
    // undefined,
    result => { 
        return new Commitment((res,rej)=>{
            res('---sleeping'); //链式调用无法完全实现;
            setTimeout(()=>{
                // console.log(commitment.status);//成功
                console.log('不睡觉',result);
                
            })
            
        })
        
    },
    result => {
        setTimeout(()=>{
           console.log(result.message);
        })
    }
).then(res => {
    console.log('111',res);
})
console.log('第三步');
// setTimeout(()=>{
//     console.log('这必定是最后一步')
// }) 