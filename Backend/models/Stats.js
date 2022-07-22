const mongoose = require("mongoose");

const statsSchema = mongoose.Schema({
    userId: String,
    description: String,
    amount: Number,
    unit: String,
    energy: String,
    date: String
})

const StatsModel = mongoose.model("stat", statsSchema);

module.exports = StatsModel;