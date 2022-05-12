const account = {
    owner : 'Jonas',
    movement: [200, 530 ,120 ,300],

    get latest() {
        return this.movement.slice(- 1).pop();
    }
}
// console.log(account.latest);
// console.log(account.movement);


// function PriceComma(num){
//     if(typeof num === 'number'){
//         let str = num.toString();
//         let arr = str.split('').reverse();
//         let newArr = [];
//         if(str.length > 3){
//             for(let i=0; i< arr.length ;i++){
//                 if(i % 3 === 0 && i !== 0){
//                     newArr.push(',',arr[i]);
//                 }else{
//                     newArr.push(arr[i]);
//                 }
//             }
//             return newArr.reverse().join('');
//         }
//         return str
//     }else{
//         return 'Error:请输入数字';
//     }
// }
// let n1 = 1234123812738127398;
// console.log(PriceComma(n1));
