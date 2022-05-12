// 设置
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name,prop) {
    // 只修改这一行下面的代码
    for(let i of contacts){
        // console.log(contacts[i])
      if(i.firstName === name){
          console.log(true)
          return i[prop] || 'No such property';
      } 
    } 
    return 'No such contact'
    // 只修改这一行上面的代码
  }
//   for(let i of contacts){
//       console.log(i)
//   }
//   lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));
//  console.log(lookUpProfile("Kristian", "lastName")) 