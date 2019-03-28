

define(["util","jquery"],function (utilModule,$) {
    $("body").css("background","red");
    const name="用户模块";

    function searchUser() {
        //查询用户
        console.log("查找用户");
        var fdate=utilModule.formatDate(new Date());
        console.log("---->格式化后的日期是："+fdate);
    }
    
    function list() {
        console.log("用户的集合");
    }

    return {name:name,searchUser:searchUser}
})