const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/cronoapp");

module.exports = { connection }
