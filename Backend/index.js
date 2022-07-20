const express = require("express");
// const { connection } = require("./db");
const authRouter = require("./routes/authRouter");
const cors = require("cors");


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("main page")
})


app.listen(8080, async () => {
    // try{
    //     await connection;
    //     console.log("db connection established")
    // }
    // catch(err){
    //     console.log("failed to cnnect");
    // }
    console.log("server running on port http://localhost:8080");
});
