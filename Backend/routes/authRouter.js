const { Router } = require("express");

const authRouter = Router();

authRouter.get("/", (req, res) => {
    res.send("Get from Auth Router")
});

authRouter.post("/signup", (req, res) => {
    res.send("Signup req");
});

authRouter.post("/login", (req, res) => {
    res.send("Login req");
});


module.exports = authRouter;