const { Router } = require("express");
const UserModel = require("../models/User");

const authRouter = Router();

authRouter.get("/", (req, res) => {
    res.send("Get from Auth Router")
});

authRouter.post("/signup", async (req, res) => {
    const user = await new UserModel(req.body);
    await user.save();
    res.send(user);
});

authRouter.post("/login", async (req, res) => {
    const user = await UserModel.find(req.body);
    res.send(user);
});


module.exports = authRouter;