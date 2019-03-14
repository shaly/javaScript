//IIFE，Iimmediately invoked function expression即时函数(立即加载的匿名函数)，也叫闭包
(function () {
    var a=456,b="Hi html";
    console.log("b------------------->"+a);
    console.log("b--此时的str为a所赋予------------------->"+str);
    str2=a;
})()