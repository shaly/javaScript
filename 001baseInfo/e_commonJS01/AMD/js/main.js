
//使用模块
(function () {

    //配置模块名称
    require.config({
        //基本路径
        baseURI:"js/",
        //映射路径，模块标识名和路径
        paths:{
            "util":"modules/util",//注意：不要写成modules/util.js
            "uService":"modules/userService",//uService可以自定义标识名字，require引用时就得引用这个定义的标识名字
            "jquery":"lib/jquery"//注意：jquery的标识名jquery已经自定义指定为jquery了，不能更改
        }
    })

    //通过require进行导入
    //require(["js/modules/userService.js"],function (userModule) {//这个方式导入也行
    //推荐使用标识导入，方便简洁明了
    require(["uService","util"],function (userModule,utilMod) {//引入时的参数是按顺序对应的，变量名自定义
        console.log("主函数引入userService的名字---》"+userModule.name);
        console.log("主函数引入util的名字---》"+utilMod.name);
        userModule.searchUser();

    })

    require(["jquery"],function ($) {//引入时的参数是按顺序对应的，变量名自定义
        $("body").html("nice to meet you ~");
        $("body").css("color","yellow");
    })



})()