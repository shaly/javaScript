const module1=require("./module");
console.log(module1);
console.log(module1.username);
//运行实例：
//1.安装node的运行环境
//2.在下方菜单中找到“Terminal”
//3.将“Terminal”的当前路径调至当前文件的路径，然后执行如下代码
// D:\SOFT_STUDY\WebStormRumtime\001baseInfo\d_chapter02\commonjs>node app.js
// { username: 'Jane', age: 18, address: '上海' }


//公共方法加载module.export对象（文件）
function commonLoadFun(mod) {
    return require(mod);
}
console.log("commonLoadFun-module1**************************");
const module1_1=commonLoadFun("./module");
console.log(module1_1);
console.log("commonLoadFun-module2**************************");
const m2=commonLoadFun("./module2");
console.log(m2());
console.log("commonLoadFun-module3**************************");
const m3=commonLoadFun("./module3");
console.log(m3);
//console.log(m3.returnAddress());
console.log("commonLoadFun-module4**************************");

