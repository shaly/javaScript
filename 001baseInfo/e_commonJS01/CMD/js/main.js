define(function (require,exports,module) {
    var u=require("./src/userService");
    console.log(u);
    u.searchUser();
    console.log("main导入userService--->"+u.name);

})