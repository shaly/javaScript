//IIFE，Iimmediately invoked function expression即时函数(立即加载的匿名函数)，也叫闭包
(function () {
    var a=789,b="Hi css";
    console.log("c--此时的GLOBAL.str1为为a所赋予------------------->"+GLOBAL.A.str1);
    console.log("c--此时的GLOBAL.str2为为b所赋予------------------->"+GLOBAL.B.str2);
    console.log("c--此时的a为GLOBAL将赋予str3------------------->"+a);
    GLOBAL.C={};
    GLOBAL.C.str=a;
    GLOBAL.C.str3=a;
    console.log("c--此时的GLOBAL中str的值分别为------------------->"
        +GLOBAL.A.str+"--"
        +GLOBAL.B.str+"--"
        +GLOBAL.C.str+"--");
})()