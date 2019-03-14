/**
 * IIFE:立即加载，匿名函数自调用，闭包
 * 作用：数据可以私有，外包可以暴露方法和属性
 * 问题：如果当前这个模块依赖另外一个模块如何解决？
 * */
(function (win) {//1.window的变量名
    var name="你的登录";
    function login() {
        alert(name+name);
    }
    win.moduleLogin=login;//2.将方法暴露到window中
    win.mreg={
        name:name,
        login:login,
        age: 1
    }
    win.m1Name=name;//不用.name，因为name是window的特殊值（自带的属性，以免覆盖）
})(window)//注：将window参数传进来，可以通过将闭包中的方法暴露到window中去，这样外包就可以访问了