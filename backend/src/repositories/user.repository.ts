import mongoose from "mongoose";
import User from "../models/user";

async function getUserByEmail(userEmail) {
  const user = await User.findOne({ email: userEmail })
  return user;
}

async function createUser(newUser) {
  return await User.create({
    _id: new mongoose.Types.ObjectId(),
    name: newUser.name,
    email: newUser.email,
    password: newUser.password
  });
}

export { getUserByEmail, createUser }