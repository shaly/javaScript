/**
 * IIFE:立即加载，匿名函数自调用，闭包
 * 作用：数据可以私有，外包可以暴露方法和属性
 * 问题：如果当前这个模块依赖另外一个模块如何解决？
 * */
(function (win) {//1.window的变量名

    var yourLogin={
        name:"名字属性，你的Login",
        init:function(){
            yourLogin.login();
            yourLogin.select();
            yourLogin.save();
            yourLogin.update();
            yourLogin.del();
        },
        login:function(){
            alert(this.name);
        },
        save:function(){
            alert("module3-save"+yourLogin.name);
        },
        del:function(){
            alert(this.name);
        },
        update:function(){
            alert(this.name);
        },
        select:function(){
            alert(this.name);
        }
    }
    win.m3User={
        name:yourLogin.name,
        m3s:yourLogin.save
    }
})(window)//注：将window参数传进来，可以通过将闭包中的方法暴露到window中去，这样外包就可以访问了