const express = require("express");
// const { Connection } = require("mongoose");
const { connection} = require("./db");
const  cors = require("cors");


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));






app.get("/", (req, res)=>{
    res.send("main page")
})


app.listen(7000, async () => {
    try{
        await connection;
        console.log("db connection established")
    }
    catch(err){
        console.log("failed to connect");
    }
  console.log("http://localhost:7000/");
});
