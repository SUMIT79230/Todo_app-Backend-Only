const express = require("express");
const app = express();

  //middleware parsing incoming JSON payloads from the request body.
app.use(express.json()); 

 // esytablish the connection with database
require('./connection');
 
 // Import routes for Todo API
const todoRoutes = require("./Routes/Todos");

 // 
app.use("/api/v1",todoRoutes);


 // Start server on Port no. : 3001
app.listen(3001, () => {
  console.log("Server started at port no. 3001");
});

 //Default Routes
app.use('/',(req,res)=>{
    res.send("Welcome to Todo App")
})
