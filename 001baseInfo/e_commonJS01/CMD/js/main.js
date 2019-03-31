define(function (require,exports,module) {
    var u=require("./src/userService");
    var $=require("./libs/jquery.js");
    console.log(u);
    u.searchUser();
    console.log("main导入userService--->"+u.name);
    $("body").css("background","red");
})