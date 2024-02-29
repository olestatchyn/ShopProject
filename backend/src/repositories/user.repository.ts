import User from "../models/user";

async function getAllUsers() {
  return await User.find();
}

async function createUser(newUser) {
  const userToCreate = {
    name: newUser.name,
    email: newUser.email
  };
  const createdUser = await User.create(userToCreate);
  return createdUser;
}

async function getUserByEmail(email) {
  const foundUser = await User.findOne({ email: email });
  if(foundUser){
    return true;
  }
  return false;
}

export { getAllUsers, createUser, getUserByEmail }