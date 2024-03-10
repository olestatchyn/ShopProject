import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import BadRequestError from "../errors/bad-request.error";
import { ErrorMessage } from "../errors/error-consts";
import { createUser, getUserByEmail } from "../repositories/user.repository";

// async function getUsers() {
//   return await getAllUsers();
// }

// async function createNewUser(newUser) {
//   return await createUser(newUser);
// }

// async function checkIfUserExists(email) {
//   return await getUserByEmail(email);
// }

async function registerUser(userInfo) {
  const user = await getUserByEmail(userInfo.email);
  if (user) {
    throw new BadRequestError(ErrorMessage.userExists);
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userInfo.password, saltRounds);
  userInfo.password = hashedPassword;

  return await createUser(userInfo);
}

async function loginUser(userInfo) {
  const emailReceived =  userInfo.email;
  const passwordReceived =  userInfo.password;
  const user = await getUserByEmail(emailReceived);

  if (!user) throw new BadRequestError(ErrorMessage.invalidEmailOrPassword);
  
  const storedPassword = user.password;
  const passwordMatch = await bcrypt.compare(passwordReceived, storedPassword);

  if (!passwordMatch) throw new BadRequestError(ErrorMessage.invalidEmailOrPassword);
  
  const token = jwt.sign({ email: emailReceived }, process.env.TOKEN_KEY, { expiresIn: '2h' });
  return token;
}

export { registerUser, loginUser }