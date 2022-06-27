```javascript
//ES6中for...of和for...in的区别
//for...of遍历获取对象的键值,for...in获取对象的键(key)名(es3)
function Person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
	Person.prototype.height = 188;
 let  p = new Person("张三",18,"男");
```

