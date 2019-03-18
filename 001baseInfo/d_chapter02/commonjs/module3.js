/**
 * 上使用exports的话，暴露的一个对象来进行管理和导出
 * exports.xxx=value(value可以是对象，也可以是数组，也可以是字符串，也可以是方法)
 * 后面的value决定了xxx的类型
 * 一个模块中可以定义多个exports,最终会把所有的exports定义的名字放入到一个对象中
 * 其实里面有一个隐式的module.exports={sayHello}
 * 注意：如果用了exports.xxx则就不要再用module.exports，两者只能二选一
 *      不然module.exports会将exports.xxx的所有xxx方法全部覆盖掉
 *      （module.exports优先级高于exports.xxx）
 * */
//module.exports={age:88};
exports.sayHello=function () {
    console.log("sayHello function");
}
exports.username="Jane";
exports.age=18;
exports.address="上海";
exports.favorite=["山竹","麻阳甜橙","白开水","外星人","米饭","云宫迅音"];

exports.returnAddress=function () {
    return "上海";
}
