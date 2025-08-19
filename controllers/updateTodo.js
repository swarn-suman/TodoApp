const Todo = require("../models/Todo");  //Import the model

//define route handler

exports.updateTodo = async(req,res) => {
    try{
        //extract title and description from request body

        const {id} = req.params;
        const {title, description} = req.body;

        //craete new Todo object and insert in DB

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},

        );

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"Updated Successfully"
            }
        );
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
