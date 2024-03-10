import mongoose from 'mongoose';
import User from '../models/user';

export default async function seeding() {
  try {
    const users = [
      { name: 'John Doe', email: 'john@example.com', password: 'johnpassword' },
      { name: 'Jane Smith', email: 'jane@example.com', password: 'janepassword' }
    ];

    await User.insertMany(users);

    console.log('User records created successfully');
  } catch (error) {
    throw new Error(`Error creating user records: ${error.message}`);
  }
}

export { seeding }