// // 设置
// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {
//     // 只修改这一行下面的代码
//     for(let i in contacts){
//     //   if(contacts[i].firstName === name){
//     //     if(contacts[i].hasOwnProperty(prop)){
//     //       return contacts[i][prop];
//     //     }else{
//     //       return 'No such property';
//     //     }
//     //   }else{
//     //        return 'No such contact'; 
//     //   }
//     // }
//     // for(let i=0;i < contacts.length;i++){
//         if(contacts[i].firstName == name){
//             return contacts[i][prop] || 'No such property';
//         }
//       }
//              return 'No such contact'; 

//     // 只修改这一行上面的代码
//   }
  
// //   console.log(lookUpProfile("Akira", "likes"))
// console.log(lookUpProfile("Kristian", "lastName"));

function randomFraction(){
    return parseInt(Math.random()*10)+1;
}
console.log(randomFraction())