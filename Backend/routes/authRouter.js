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
    if (user.length > 0) {
        const { _id, email } = user[0];
        const payload = {
            id: _id, email
        }
        res.send(payload);
    }
    else {
        res.status(404).send({ message: "Wrong Credentials" });
    }
});

authRouter.delete("/user/:userId", (req, res) => {
    const { userId } = req.params;
    UserModel.findByIdAndDelete(userId, (err) => {
        if (err) return res.send({ message: "Something went wrong while deleting" });
        return res.send("Successfully deleted the user");
    })
})

authRouter.patch("/user/:userId", (req, res) => {
    const { userId } = req.params;
    UserModel.updateOne({ _id: userId }, { $set: { ...req.body } }, (err) => {
        if (err) res.send(err);
        res.send("updated")
    })
})


module.exports = authRouter;


// {
//     "email": "xyz@test.com",
//     "password": "something",
//     "height": "156",
//     "weight": "45",
//     "dob": "54566",
//     "gender": "Male"
// }