// Import model because I have to working on it
const Todo = require("../Models/Todo");

// Router-handler of createTodo
const createTodo = async (req, res) => 
{
  try 
  {
    const { title, description } = req.body;
    const todo = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: todo,
      message: "Entry Created Successfully",
    });

  } 
  catch (err) 
  {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });

  }
};

module.exports = { createTodo };
