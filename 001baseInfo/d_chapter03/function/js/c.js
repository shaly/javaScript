//IIFE，Iimmediately invoked function expression即时函数(立即加载的匿名函数)，也叫闭包
(function () {
    var a=789,b="Hi css";
    console.log(a);
    console.log("c--此时的str为为a所赋予------------------->"+str);
    console.log("c--此时的str2为为b所赋予------------------->"+str2);
})()