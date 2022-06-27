
class Commitment{
    constructor(executor){
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
      this.onResolvedCallbacks = [];
      this.onRejectedCallbacks = [];
      let resolve = value => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.onResolvedCallbacks.forEach(fn=>fn());
        }
      };
      let reject = reason => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
          this.onRejectedCallbacks.forEach(fn=>fn());
        }
      };
      try{
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
    then(onFulfilled,onRejected) {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
      onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
      let Commitment2 = new Commitment((resolve, reject) => {
        if (this.state === 'fulfilled') {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolveCommitment(Commitment2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        };
        if (this.state === 'rejected') {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolveCommitment(Commitment2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        };
        if (this.state === 'pending') {
          this.onResolvedCallbacks.push(() => {
            setTimeout(() => {
              try {
                let x = onFulfilled(this.value);
                resolveCommitment(Commitment2, x, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0);
          });
          this.onRejectedCallbacks.push(() => {
            setTimeout(() => {
              try {
                let x = onRejected(this.reason);
                resolveCommitment(Commitment2, x, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0)
          });
        };
      });
      return Commitment2;
    }
    catch(fn){
      return this.then(null,fn);
    }
  }
  function resolveCommitment(Commitment2, x, resolve, reject){
    if(x === Commitment2){
      return reject(new TypeError('Chaining cycle detected for Commitment'));
    }
    let called;
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
      try {
        let then = x.then;
        if (typeof then === 'function') { 
          then.call(x, y => {
            if(called)return;
            called = true;
            resolveCommitment(Commitment2, y, resolve, reject);
          }, err => {
            if(called)return;
            called = true;
            reject(err);
          })
        } else {
          resolve(x);
        }
      } catch (e) {
        if(called)return;
        called = true;
        reject(e); 
      }
    } else {
      resolve(x);
    }
  }
  //resolve方法
  Commitment.resolve = function(val){
    return new Commitment((resolve,reject)=>{
      resolve(val)
    });
  }
  //reject方法
  Commitment.reject = function(val){
    return new Commitment((resolve,reject)=>{
      reject(val)
    });
  }
  //race方法 
  Commitment.race = function(Commitments){
    return new Commitment((resolve,reject)=>{
      for(let i=0;i<Commitments.length;i++){
        Commitments[i].then(resolve,reject)
      };
    })
  }
  //all方法(获取所有的Commitment，都执行then，把结果放到数组，一起返回)
  Commitment.all = function(Commitments){
    let arr = [];
    let i = 0;
    function processData(index,data){
      arr[index] = data;
      i++;
      if(i == Commitments.length){
        resolve(arr);
      };
    };
    return new Commitment((resolve,reject)=>{
      for(let i=0;i<Commitments.length;i++){
        Commitments[i].then(data=>{
          processData(i,data);
        },reject);
      };
    });
  }
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(333);
    }, 1000)
});
p.then(res => {
    console.log(res);
    return "ahhaha";
}).then(res => {
    console.log(res)
})
//   const p = new Commitment((resolve, reject) => {
//     setTimeout(() => {
//         resolve(333);
//     }, 1000)
// });
// p.then(res => {
//     console.log(res);
//     setTimeout(() => {
//         console.log('----睡觉睡觉睡觉');
//         return '----睡觉睡觉睡觉'
//     }, 4000);
//     console.log('----hhh');
// }).then(res => {
//     console.log(res);
// })