//IIFE，Iimmediately invoked function expression即时函数(立即加载的匿名函数)，也叫闭包
(function (win) {
    var a=456,b="Hi html";
    console.log("b--此时的window.str1为------------------->"+win.str1);
    console.log("b--此时的window.str为------------------->"+win.str);
    console.log("b--此时的a为将会赋予window全局变量str2------------------->"+a);
    win.str2=a;
})(window)