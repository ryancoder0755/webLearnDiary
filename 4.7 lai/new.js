// function _new(fn,...arg){
//     const obj = Object.create(fn.property);
//     const rej = fn.apply(obj,arg);
//     return rej instanceof Object ? rej : obj;
// }

// function Person(name,age,sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     sayName:()=>{
//         console.log('我的名字是'+this.name+',今年'+this.age+'岁了,'+'性别:'+this.sex)
//     };
// }
// let lilei  = _new(Person,['赖嘉滇','28','男']);
// console.log(lilei);
setTimeout(() => {
    console.log("hello");
    console.log("hello");
    console.log("hello");
    setTimeout(() => {
      console.log("vue.js");
      console.log("vue.js");
      console.log("vue.js");
      setTimeout(() => {
        console.log("node.js");
        console.log("node.js");
        console.log("node.js");
      }, 1000);
    }, 1000);
  }, 1000);
