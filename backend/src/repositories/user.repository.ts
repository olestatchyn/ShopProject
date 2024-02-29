import User from "../models/user";

let testUserArray: User[] = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
];

async function getAllUsers() {
  return testUserArray;
}

async function createUser(newUser) {
  const userToCreate: User = {
    name: newUser.name,
    email: newUser.email
  };
  testUserArray.push(userToCreate);
  return newUser;
}

async function getUserByEmail(email) {
  const existingUser = testUserArray.find(user => user.email === email);
  if(existingUser){
    return true;
  }
  return false;
}

export { getAllUsers, createUser, getUserByEmail }