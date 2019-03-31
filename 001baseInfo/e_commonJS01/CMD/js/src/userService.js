define(function (require,e,m) {

    //require.async异步加载，等其他所有操作都加载完了再加载此操作
    require.async("./asyncDemo",function (asy) {
       // console.log(asy.SESSION_USERNAME);
    })
    var u=require("./util");
    function searchUser() {
        console.log("查找用户");
        var fdate=u.formatDate(new Date());
        console.log("格式化后的日期为："+fdate);
    };

    const name="用户模块名字";
    e.name=name;
    e.searchUser=searchUser;
   // m.exports={name:name,searchUser:searchUser};
});