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

GLOBAL.namespaces("dom");

GLOBAL.dom.ready=function (fn) {
    if (document.addEventListener) {//兼容IE
        document.addEventListener("DOMContentLoaded", function () {
            //注销时间，避免反复触发
            document.removeEventListener("DOMContentLoaded", arguments.callee, false);
            fn();//调用参数函数
        }, false);
    } else if(document.attachEvent){//兼容IE
        IEContentLoaded(window, fn);
    }

    function IEContentLoaded(w,fn) {
        var d=w.document,done=false;
        //only fire once
        init=function () {
            if(!done){
                done=true;
                fn();
            }
        };
        //polling for no errors
        (function () {
            try{
                d.documentElement.doScroll("left");
            }catch (e) {
                setTimeout(arguments.callee,50);
                return;
            }
        })();
        //trying to always fire before onload
        d.onreadystatechange=function () {
            if(d.readyState=='complete'){
                d.onreadystatechange=null;
                init();
            }
        }
    }


}
