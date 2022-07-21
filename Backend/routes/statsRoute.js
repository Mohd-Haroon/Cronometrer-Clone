const { Router } = require("express");
const StatsModel = require("../models/Stats");

const statsRouter = Router();

statsRouter.get("/", (req, res) => {
    res.send("Get from stats router");
})

statsRouter.get("/:userId/stats", async (req, res) => {
    const { userId } = req.params;
    const stats = await StatsModel.find({ id: userId });
    res.send(stats);
})

statsRouter.post("/:userId/stats", async (req, res) => {
    const { userId } = req.params;
    const payload = {
        ...req.body,
        userId
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