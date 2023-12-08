module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    router.post("/register", users.registerUser);
    router.post("/login", users.loginUser);
    router.post("/getUser", users.getUser);
    router.post("/delete", users.deleteUser);

    app.use('/api/user', router);
}