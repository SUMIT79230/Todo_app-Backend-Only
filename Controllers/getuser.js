// Import Model because I have to working on it 
const Todo = require("../Models/Todo");

// Router-handler of getUser
exports.getUser = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await Todo.find({});

    // Response
    res.status(200).json({
      success: true,
      data: users,
      message: "Entire Data can be fetched out",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: 'Server Error',
    });
  }
};

// Router-handler for particular User 
exports.User = async (req, res) => {
    try 
    {
         // Fetch individual user from the database
        const id = req.params.id;
        const user =await Todo.findById({_id:id});

        // If User Founded
        if(user)
        {
            return res.status(200).json({
                success:true,
                data:user,
                message:"User Founded !"
            })
        }

        // If User not Founded 
        if(!user)
        {
            return res.status(400).json({
                success:false,
                message:`User :${id} is not to be founded `
            })
        }
    } 
    catch (err) 
    {
      console.error(err);
      res.status(500).json({
        success: false,
        error: err.message,
        message: 'Server Error',
      });
    }
  };
