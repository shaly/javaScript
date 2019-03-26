exports.name="module4";
exports.sayName=function () {
    console.log("module4方法");
    console.log("--------------",this);
    return "我是"+this.name;
}