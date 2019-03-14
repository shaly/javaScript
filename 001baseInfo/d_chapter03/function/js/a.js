//IIFE，Iimmediately invoked function expression即时函数(立即加载的匿名函数)，也叫闭包
(function () {
    console.log(this);
    var a=123,b="Hi javascript";
    console.log(a);
    str=a;
})()