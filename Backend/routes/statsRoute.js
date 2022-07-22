const { Router } = require("express");
const StatsModel = require("../models/Stats");

const statsRouter = Router();

statsRouter.get("/", (req, res) => {
    res.send("Get from stats router");
})

statsRouter.get("/:userId/:date/stats", async (req, res) => {
    const { userId, date } = req.params;
    const stats = await StatsModel.find({ $and: [{ userId: userId }, { date: date }] });
    res.send(stats);
})

statsRouter.post("/:userId/:date/stats", async (req, res) => {
    const { userId,date } = req.params;
    const payload = {
        ...req.body,
        userId,
        date
    }
    const userStats = await new StatsModel(payload);
    await userStats.save((err, success) => {
        if (err) {
            return res.status(400).send({ message: "Something went wrong" });
        }
        return res.status(200).send(userStats);
    });
})

module.exports = statsRouter;