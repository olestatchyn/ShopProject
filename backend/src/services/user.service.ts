import { createUser, getAllUsers, getUserByEmail } from "../repositories/user.repository";

async function getUsers() {
  return await getAllUsers();
}

async function createNewUser(newUser) {
  return await createUser(newUser);
}

async function checkIfUserExists(email) {
  return await getUserByEmail(email);
}

export { getUsers, createNewUser, checkIfUserExists }