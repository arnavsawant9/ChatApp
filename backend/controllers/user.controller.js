import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUSerId=req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUSerId}}).select('-password'); //All users in the DB except ourselves
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in get users for sidebar controller: ", error.message);
        res.status(500).json({error: "Internal Server error occured"});
    }
}