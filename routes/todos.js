const express=require("express");
const router=express.Router();

const { getTodo } = require("../controllers/getTodo");
const { createTodo } = require("../controllers/createTodo");


router.get("/getTodo",getTodo);
router.post("/createTodo",createTodo)

module.exports=router;