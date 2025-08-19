//Agr muzhe Todo object bnana hae to uska schema pta hna chahiye zo ki modules wale folder m milega

//const {response} = require("express");
const Todo = require("../models/Todo");  //Import the model

//define route handler

exports.getTodo = async(req,res) => {
    try{
        //fetch all toDo items from Database

        const todos= await Todo.find({});

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"Entire Todo Data is fetched"
            }
        );
    }

    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error: err.message,
            message:"Internal Server Error"

        })
    }

}

exports.getTodoById = async(req,res) => {
    try{

        //fetch the ID
        const id = req.params.id;
        
        //fetch toDo item from Database based on ID

        const todo= await Todo.findById({_id: id});

        //data for given ID not found
        if(!todo){
            return res.status(404).json(
            {
                success:false,
                message:"No data for given ID"
            })
      
        }

         res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todo ${id} data fetched successfully`,
            });
    }

    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error: err.message,
            message:"Internal Server Error"

        })
    }
}
