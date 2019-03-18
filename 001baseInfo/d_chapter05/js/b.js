//IIFE，Iimmediately invoked function expression即时函数(立即加载的匿名函数)，也叫闭包
//********************************************************
//描述：A模块
//工程师：Jane
//相关信息：xxxxx@qq.com qq:xxxx
//依赖模块：GLOBAL.A
//********************************************************
(function () {
    var a=456,b="Hi html";
    console.log("b--此时的GLOBAL.str1为------------------->"+GLOBAL.A.str1);
    console.log("b--此时的GLOBAL.str为------------------->"+GLOBAL.str);
    console.log("b--此时的a为将会赋予GLOBAL全局变量str2------------------->"+a);
    //GLOBAL.B={};
    GLOBAL.namespaces("B");
    GLOBAL.B.str=a;
    GLOBAL.B.str2=a;
})()