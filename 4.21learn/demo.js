// function getTop3Dom(){
//     const Obj = {};
//     let arr = new Array();
//     const newArr = new Array();
//     const element = Array.from(document.querySelectorAll('*'));
//     element.forEach((currentValue,index,thisArr)=>{
//         if(Obj.hasOwnProperty((currentValue.nodeName))== true){
//             Obj[currentValue.nodeName] += 1;
//         }else{
//             Obj[currentValue.nodeName] = 1;
//         }
//     })
//     for(let i in Obj){
//         let elem = {};
//         elem.name = i;
//         elem.value = Obj[i];
//         newArr.push(elem);
//     }
//     newArr.sort(function (a,b){
//         return b.value - a.value;
//     })
//     return newArr;
// }
// function getTrueType(obj){
//    let result = Object.prototype.toString.call(obj).slice(8,-1);
//    return result;
// }
// let top3 = getTop3Dom();
// console.log(top3[0],top3[1],top3[2]);

// function getTop3Dom(){
//     const obj = {};
//     const arr = new Array();
//     const element = Array.from(document.querySelectorAll("*"));
    
//     for(const i of element){
//         obj[i.tagName] = (obj[i.tagName] || 0) + 1;
//     }

//     let sorted = Object.entries(obj).sort((a,b)=>{
//         return b[1] - a[1];
//     })
//     return sorted.slice(0,3).map(e=>{
//         return e[0]
//     })
// }
// console.log(getTop3Dom());

function getTop3Dom(){
    let html = document.querySelector('html');
    const obj = {};
    const arr = new Array();
    // const element = Array.from(document.querySelectorAll("*"));
    function scan(parent) {
        obj[parent.tagName] = (obj[parent.tagName] || 0) + 1;
        for(const el of parent.children){
             scan(el);
        }
    }
    scan(html);

    let sorted = Object.entries(obj).sort((a,b)=>{
        return b[1] - a[1];
    })
    return sorted.slice(0,3).map(e=>{
        return e[0]
    })
}
console.log(getTop3Dom());