//IIFE，Iimmediately invoked function expression即时函数(立即加载的匿名函数)，也叫闭包
//全局变量
var GLOBAL={};
// GLOBAL.namespaces("A");
// GLOBAL.namespaces("A.FUN");
// GLOBAL.namespaces("A.FUN.NAME");
GLOBAL.namespaces=function (str) {
    var arr=str.split(".");
    var obj=GLOBAL;
    for (let i=(arr[0]=="GLOBAL"?1:0);i<arr.length;i++){
        obj[arr[i]]=obj[arr[i]]||{};//
        obj=obj[arr[i]];
    }
}
/*
GLOBAL.namespaces("A");
GLOBAL.namespaces("GLOBAL.A.XXX1.NAME");
GLOBAL.namespaces("C");
GLOBAL.namespaces("B.XXX2.NAME");
console.log(GLOBAL);*/
