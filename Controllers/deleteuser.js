// Import the model and mongoose
const Todo = require("../Models/Todo");
const mongoose = require("mongoose");

// Define route handler
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);
    
    res.json({
      success: true,
      message: "Todo deleted successfully",
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
