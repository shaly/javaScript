
const module1=require("./module");

const module2=require("./module2");
//console.log(module1);
console.log(module1);
console.log(module1.username);
console.log(module1.age);
console.log(module1.address);

module2();
const module3=require("./module3");
console.log(module3());
const module4=require("./module4");
//module4.sayName();
console.log(module4.sayName());