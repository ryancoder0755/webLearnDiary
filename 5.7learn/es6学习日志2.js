//对象的拷贝与合并
// let target = {a:1};
// let source1 = {b:2};
// let source2 = {c:3};
// Object.assign(target,source1,source2);
// console.log(target);
// let target= {a:1,b:2};
// let source1 = {b:3,c:3};
// let source2 = {c:4}
//  Object.assign(target,source1,source2);
// console.log(target);

// let abc = Object.assign('123');
// console.log(abc);
// console.log(Object.assign(undefined));
// console.log(Object.assign(null));

// let person = {};
// person['first-name']= '李';
// person['last-name']= '四';
// person['ageAttr'] = 20;
// console.log(person);

let ageAttr = '宋'
let person = {
    ['first-name']:'李',
    ['last-name']:'四',
    [ageAttr] : 20
}
console.log(person)