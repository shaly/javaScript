//CMD
/*
module.exports=function (date) {
    //格式化代码存放
}*/

//AMD define来完成模块输入

/*
    格式：
    define(["依赖模块名放此处|如果没有依赖可以省略"],function () {
        return {模块名}
    });
*/

define(function () {
    const pattern="yyyy-MM-dd HH:mm:ss";
    const name="util模块";
    function formatDate(date) {
        console.log("你要格式化的日期是："+date);

        return date.toLocaleDateString();
    }

    //导出模块
    // return {name,formatDate};
    return {name:name,formatDate:formatDate};
    //此模块和上面的是一致的，如果key和值都一致，可以如上一行那样简写。（但有时会有问题）
});

