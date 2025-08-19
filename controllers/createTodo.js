//Agr muzhe Todo object bnana hae to uska schema pta hna chahiye zo ki modules wale folder m milega

//const {response} = require("express");
const Todo = require("../models/Todo");  //Import the model

//define route handler

exports.createTodo = async(req,res) => {
    try{
        //extract title and description from request body

        const {title, description} = req.body;

        //craete new Todo object and insert in DB

        const response = await Todo.create({title,description});

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
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
