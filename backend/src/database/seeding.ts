import mongoose from 'mongoose';
import User from '../models/user.model';

async function seedDatabase() {
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

export default async function handleSeed() {
  try {
    const db = mongoose.connection.db;
    const collections = await db.collections();
    
    if (collections.length === 0) {
      seedDatabase();
      console.log('Database seeded successfully.');
    } else {
      console.log('Database not empty. Skipping seeding process.');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

export { handleSeed }