//IIFE，Iimmediately invoked function expression即时函数(立即加载的匿名函数)，也叫闭包

//********************************************************
//描述：A模块
//工程师：Jane
//相关信息：xxxxx@qq.com qq:xxxx
//依赖模块：暂无
//********************************************************
(function () {
    var a=123,b="Hi javascript";
    console.log("a--此时的a为将会赋予GLOBAL全局变量str1------------------->"+a);
    //赋值给全局变量
    //GLOBAL.A={};//多加一层，防止不同文件变量名覆盖
    GLOBAL.namespaces("A");
    //GLOBAL.A.FUN={};
    GLOBAL.namespaces("A.FUN");


    GLOBAL.A.str=a;
    GLOBAL.A.str1=a;

    GLOBAL.A.init=function () {
        console.log("AAAAA init");
        var boxDom=GLOBAL.dom.id("box");
        console.log("***1"+boxDom);
        console.log("***2"+boxDom.innerHTML);
    }
})()