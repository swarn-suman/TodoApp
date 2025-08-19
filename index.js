const express = require('express');
const app = express();


//Load config from .env file to process object
require('dotenv').config();
const PORT = process.env.PORT || 4000; // Agr defined port nahi aya to PORT:4000 p chalayenge

//Middleware to parse json request body
app.use(express.json());


//Import Routes for Todo API
const todoRoutes = require("./routes/todos");

//Mount the Todo API routes
app.use("/api/v1",todoRoutes);


//start server
app.listen(PORT,() => {
    console.log(`Server is running at port ${PORT}`);
})


//connect to the Database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res) => {
    res.send(`<h1>HomePage</h1>`);
})