/**
**namespace模式：
 *   编码：将数据/行为封装到对象中
 *   解决：命名冲突（减少了全局变量）
 *   问题：数据不安全（外部可以直接修改模块内部的数据）


 //login,reg,forget都是函数，三种不同写法
 *   yourLogin命名空间的概念，我们把函数与变量锁在对象中
 *   yourLogin:命名空间的概念，取名的时候一定要有  私有前缀 + 模块名
 **/

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
        alert(this.name);
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

