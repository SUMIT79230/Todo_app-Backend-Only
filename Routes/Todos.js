const express = require("express");
const router = express.Router();

// Import Router-handler for handling function
const { createTodo } = require("../Controllers/createuser");
const { getUser, User } = require("../Controllers/getuser");
const { deleteUser } = require("../Controllers/deleteuser");
const { updateTodo} = require("../Controllers/updateuser");

// Define routes for controller
router.post("/createTodo", createTodo);
router.get("/getusers", getUser);
router.get("/getuser/:id", User);
router.put("/updateuser/:id", updateTodo);
router.delete("/delete/:id", deleteUser);

module.exports = router;
