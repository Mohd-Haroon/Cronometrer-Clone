const express = require("express");
const { Connection } = require("mongoose");
const { connection} = require("./db");
const  cors = require("cors");
require("dotenv").config();
const userRouter = require("./Auth/User_route");

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


 app.use("/auth", userRouter);



app.get("/", (req, res)=>{
    res.send("main page")
})


app.listen(8080, async () => {
    try{
        await connection;
        console.log("db connection established")
    }
    catch(err){
        console.log("failed to connect");
    }
  console.log("http://localhost:8080/");
});
