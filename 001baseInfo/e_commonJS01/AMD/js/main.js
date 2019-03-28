
//使用模块
(function () {

    //配置模块名称
    require.config({
        //基本路径
        baseURI:"js/",
        //映射路径，模块标识名和路径
        paths:{
            "util":"modules/util",
            "userService":"modules/userService"
        }
    })

    //通过require进行导入
    require(["userService"],function (userModule) {
        console.log("主函数引入---》"+userModule.name);
        userModule.searchUser();
    })
})()