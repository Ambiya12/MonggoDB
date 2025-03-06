import User from "../models/users.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length < 1) {
      return res.status(400).json("No users founde");
    }
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json("Internal server error");
  }
};

export const getUserbyID = async (req, res) => {
  const { id } = req.params;
  try {
    const userByID = await User.findById(id);
    if (!userByID) {
      return res.status(404).json("No user found");
    }
    return res.status(200).json(userByID);
  } catch (err) {
    return res.status(400).json("Internal server error");
  }
};

export const createUser = async (req, res) => {
  console.log(req.body);
  const { first_name, last_name, email, password } = req.body;
  try {
    const newUser = await User.create(req.body);
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json("Internal server error");
  }
};

export const userUpdate = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;
  try {
    const userByID = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!userByID) {
      return res.status(404).json("No user found");
    }
    userByID.save();
    return res.json(userByID);
  } catch (err) {
    return res.status(400).json("Internal server error");
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json("No user found");
    }
    return res.json("User deleted successfully");
  } catch (err) {
    return res.status(400).json("Internal server error");
  }
};
