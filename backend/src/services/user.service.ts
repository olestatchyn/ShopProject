import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import BadRequestError from "../errors/bad-request.error";
import { ErrorMessage } from "../errors/error-consts";
import { createUser, editUserPassword, getUserByEmail } from "../repositories/user.repository";
import { EntityNotFound } from '../errors/entity-not-found.error';

async function registerUser(userInfo) {
  const user = await getUserByEmail(userInfo.email);
  if (user) {
    throw new BadRequestError(ErrorMessage.userExists);
  }
  const saltRounds = parseInt(process.env.SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(userInfo.password, saltRounds);
  userInfo.password = hashedPassword;

  await createUser(userInfo);
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

async function handlePasswordReset(userInfo) {

  const user = await getUserByEmail(userInfo.email);
  if (!user) {
    throw new EntityNotFound(ErrorMessage.invalidEmail);
  }

  await sendPasswordResetEmail(userInfo);
}

async function sendPasswordResetEmail(userInfo) {
  const email = userInfo.email;
  const resetUrl = userInfo.link;
  
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Reset Your Password',
    html: `
      <p>You have requested to reset your password.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetUrl}">${resetUrl}</a>
      <p>If you did not request a password reset, please ignore this email.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

async function resetPassword(userInfo) {
  const userEmail = userInfo.email;
  const saltRounds = parseInt(process.env.SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(userInfo.password, saltRounds);
  await editUserPassword(userEmail, hashedPassword);
}

export { registerUser, loginUser, handlePasswordReset, resetPassword }