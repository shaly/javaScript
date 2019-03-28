//require是用来依赖其他模块，变量名可自定义
//exports和module都是用来导出自身模块，变量名可自定义
define(function (require,e,m) {

    const patern="yyyy-MM-dd HH:mm:ss";

    function formatDate(date) {
        console.log("格式化日期是"+date);
        return date.toLocaleString();
    };


    //导出模块
    //可以用exports.xxx导出（可以导出多个）
    e.formatDate=formatDate;
    //也可以用module.exports导出;(只能导出单个）
    //module.exports=formatDate;
});