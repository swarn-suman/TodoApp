const Todo = require("../models/Todo");  //Import the model

//define route handler

exports.deleteTodo = async(req,res) => {
    try{
        //extract title and description from request body

        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Todo DELETED",
        })
            
    }

    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal Server Error",
            message:err.message

        })
    }

};
