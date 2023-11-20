const express=require("express");
const app=express();
const todoRoutes=require("./routes/todos")
require("dotenv").config();

app.use(express.json());

PORT=process.env.PORT || 3000;

const dbConnect=require("./config/database");
dbConnect();

app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log(`Application Running on ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("Hello Welcome to TODO APP");
})
