const userSchema = mongoose.Schema({
    email: String,
    passord: String,
    gender: { type: String, enum: ['Male', 'Female'] },
    dob: String,
    height: String,
    weight: String
})



const { Router } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res
      .status(422)
      .json({ error: "Please fill each and every details" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else {
      const user = new User({ firstName, lastName, email, password });
      await user.save();
      res
        .status(201)
        .json({ message: "User registered successfully", user: user });
    }
  } catch (err) {
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      if (!isMatch) {
        res.status(400).json({ error: "invalid details" });
      } else {
        res
          .status(201)
          .json({ message: "user login successfully", token, userLogin });
      }
    } else {
      res.status(400).json({ error: "invalid details" });
    }
  } catch (err) {
    console.log(err);
  }
});

userRouter.post("/logout", async (req, res) => {
  try {
    const { token } = req.headers;
    const user = await User.findOne({ token: token });
    console.log(user, token);
    if (user) {
      user.tokens = [];
      await user.save();
      res.status(200).json({ message: "logout successfully" });
    } else {
      res.status(400).json({ error: "invalid token" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = userRouter;
