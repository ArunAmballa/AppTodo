const Todo = require("../models/Todo")

exports.getTodo=async(req,res)=>
{
    try
    {
        const response=await Todo.find({});
        res.status(200).json({
            success:true,
            data:response,
            message:"Successfully Retrived all Todos",
        })
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            success:false,
            data:"SomeThing went Wrong",
            message:error.message,
        })

    }
}