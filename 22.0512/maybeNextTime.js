// let test = {
//     name : "李四",
//     age:20
// }
// var a =1;
// function fn(a){
//     console.log(a)
// }

// fn();

// var a = 1;
// function fn(a){
//     var a = 2;
//     console.log(this.a)
// }

// fn(a);

var  a= 1;
function fn(){
    console.log(a);
    console.log(this.a);
}

function main(){
    var a= 2;
    fn()
}
main();