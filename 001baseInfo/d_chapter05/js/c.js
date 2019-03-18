//IIFE，Iimmediately invoked function expression即时函数(立即加载的匿名函数)，也叫闭包
(function () {
    var a=789,b="Hi css";
    console.log("c--此时的GLOBAL.str1为为a所赋予------------------->"+GLOBAL.str1);
    console.log("c--此时的GLOBAL.str2为为b所赋予------------------->"+GLOBAL.str2);
    console.log("c--此时的a为window将赋予str3------------------->"+a);
    GLOBAL.str3=a;
})()