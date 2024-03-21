import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
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

async function handlePasswordReset(email) {

  const user = await getUserByEmail(email);

  if (!user) throw new EntityNotFound(ErrorMessage.invalidEmail);

  await sendPasswordResetEmail(email);
}

function encryptEmail(email) {
  const secret = Buffer.from(process.env.CRYPTO_KEY, 'hex');
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv);
  let encrypted = cipher.update(email);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

function decryptEmail(encrypted) {
  const secret = Buffer.from(process.env.CRYPTO_KEY, 'hex');
  const [iv, data] = encrypted.split(':');
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(secret),
    Buffer.from(iv, 'hex')
  );
  let decrypted = decipher.update(Buffer.from(data, 'hex'));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

async function sendPasswordResetEmail(email) {
  const encryptedEmail = encryptEmail(email);
  const resetUrl = `${process.env.FRONTEND_RESET_PASSWORD_URL}${encryptedEmail}`;

  const htmlFilePath = path.join(__dirname, '..', 'emails', 'reset_password_template.html');
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

  const replacedHtmlContent = htmlContent.replace('{{resetUrl}}', resetUrl);
  
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
    html: replacedHtmlContent,
  };

  await transporter.sendMail(mailOptions);
}

async function resetPassword(userInfo) {
  const encryptedEmail = userInfo.encryptedEmail;
  const decryptedEmail = decryptEmail(encryptedEmail);

  const user = await getUserByEmail(decryptedEmail);
  if (!user) throw new BadRequestError(ErrorMessage.invalidEmail);

  const saltRounds = parseInt(process.env.SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(userInfo.password, saltRounds);
  await editUserPassword(decryptedEmail, hashedPassword);
}

export { registerUser, loginUser, handlePasswordReset, resetPassword }