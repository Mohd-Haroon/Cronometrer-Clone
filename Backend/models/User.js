const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    gender: { type: String, enum: ['Male', 'Female'] },
    dob: String,
    height: String,
    weight: String
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;