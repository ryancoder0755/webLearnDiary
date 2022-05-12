let target = { a: 1, b: 6 };
let source = { b: 4, c: 5 };
let returnedTarget = Object.assign({},target, source);
console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }
console.log(source);