//对象的解构
// let person = {
//     name:"张三",
//     age:20,
//     children:{
//         name:"李四",
//         age:19
//     }
// };
// let {name,age}=person;
// console.log(name,age);

// let name,age;
// ({name,age} = person); //等号左边不能有大括号,如果有需要将整个表达式用()括起来;
// console.log(name,age);

//别名
// let {name:pName,age,city="北京"}= person; //默认值city,person对象有city属性则取属性值;
// let name = "李四"
// console.log(name,pName,age,city);

// let {children:{name:cName}} = person;
// console.log(cName);

// let classify = {
//     title:"菜品",
//     children:{
//         title:"肉类",
//         children:{
//             title:"羊肉串"
//         }
//     }
// }

// let {children:{children:{title:cTitle}}} = classify;
// console.log(cTitle)

//...浅拷贝
// let {...personObj} = person;
// personObj.children.name = "王五";
// console.log(personObj,'\n',person)

//数组解构
let arr = [10,20,30];
// let a=arr[0] , b = arr[1] ,c = arr[2];
// console.log(a,b,c);
// let [a,b,c] = arr;
// let [,,c] = arr
// console.log(c);

// let a,b,c;
// [a,b,c] = arr; //等号左边不能有大括号,如果有需要将整个表达式用()括起来;
// console.log(a,b,c)

// let [a,b,c,d=40] = arr;
//     console.log(a,b,c,d)

// let book = ['PHP','JAVA',['Javascript','CSS','HTML']];
//     // let [bk1,,[,,bk2]]=book
//     // console.log(bk1,bk2);
  
//     let [a,,[...b]] = book; //加[]变成一维数组,实现数组浅拷贝;
//     console.log(a,b)
// function person(){
//     console.log('张三');
//     console.log(Object.prototype.toString.call(arguments));
//     let args = arguments;
//     console.log(args);
// }
// person(1,2,3)//[1,2,3]
//箭头函数
let person = (...args)=>{
    // let args = arguments; //报错,箭头函数没有arguments
    console.log('张三');
    console.log(args);
}
person(1,2,3)