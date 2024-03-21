import User from "../models/user.model";
import { EntityNotFound } from "../errors/entity-not-found.error";
import { ErrorMessage } from "../errors/error-consts";

async function getUserByEmail(userEmail) {
  const user = await User.findOne({ email: userEmail })
  return user;
}

async function editUserPassword(userEmail, newPassword) {
  const user = await User.findOne({ email: userEmail });

  if (!user) {
    throw new EntityNotFound(ErrorMessage.invalidEmail);
  }

  user.password = newPassword;

  await user.save();
}

async function createUser(newUser) {
  await User.create({
    name: newUser.name,
    email: newUser.email,
    password: newUser.password
  });
}

export { getUserByEmail, createUser, editUserPassword }