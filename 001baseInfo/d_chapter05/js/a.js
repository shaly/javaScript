//IIFE，Iimmediately invoked function expression即时函数(立即加载的匿名函数)，也叫闭包
(function () {
    var a=123,b="Hi javascript";
    console.log("a--此时的a为将会赋予GLOBAL全局变量str1------------------->"+a);
    //赋值给全局变量
    GLOBAL.A={};//多加一层，防止不同文件变量名覆盖
    GLOBAL.A.str=a;
    GLOBAL.A.str1=a;

    GLOBAL.A.FUN={};

    GLOBAL.A.FUN.add=function () {
        console.log("GLOBAL.A.FUN.add   function;")
    }
    GLOBAL.A.FUN.update=function () {
        console.log("GLOBAL.A.FUN.update   function;")
    }
    GLOBAL.A.FUN.del=function () {
        console.log("GLOBAL.A.FUN.del   function;")
    }
    GLOBAL.A.FUN.query=function () {
        console.log("GLOBAL.A.FUN.query   function;")
    }
})()