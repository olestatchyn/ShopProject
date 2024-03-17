import mongoose from 'mongoose';
import User from '../models/user.model';
import Pizza from '../models/products/pizza.model';

async function seedDatabase() {
  try {
    const users = [
      { name: 'John Doe', email: 'john@example.com', password: 'johnpassword' },
      { name: 'Jane Smith', email: 'jane@example.com', password: 'janepassword' }
    ];

    await User.insertMany(users);

    console.log('User records created successfully');

    const pizzas = [
      { 
        name: 'Margherita',
        description: 'Classic tomato sauce, mozzarella cheese, and basil',
        sizeAndPrice: { '30': 10, '40': 12 }
      },
      { 
        name: 'Pepperoni',
        description: 'Tomato sauce, mozzarella cheese, and pepperoni',
        sizeAndPrice: { '30': 12, '40': 15 }
      },
      { 
        name: 'Vegetarian',
        description: 'Assorted veggies, tomato sauce, and mozzarella cheese',
        sizeAndPrice: { '30': 11, '40': 14 }
      },
      { 
        name: 'Hawaiian',
        description: 'Tomato sauce, mozzarella cheese, ham, and pineapple',
        sizeAndPrice: { '30': 13, '40': 16 }
      },
      { 
        name: 'BBQ Chicken',
        description: 'BBQ sauce, mozzarella cheese, grilled chicken, and onions',
        sizeAndPrice: { '30': 14, '40': 17 }
      },
      { 
        name: 'Meat Lovers',
        description: 'Tomato sauce, mozzarella cheese, pepperoni, sausage, bacon, and ham',
        sizeAndPrice: { '30': 15, '40': 18 }
      },
      { 
        name: 'Mushroom',
        description: 'Tomato sauce, mozzarella cheese, mushrooms, and black olives',
        sizeAndPrice: { '30': 11, '40': 14 }
      },
      { 
        name: 'Supreme',
        description: 'Tomato sauce, mozzarella cheese, pepperoni, sausage, onions, bell peppers, and black olives',
        sizeAndPrice: { '30': 16, '40': 19 }
      },
      { 
        name: 'Buffalo Chicken',
        description: 'Buffalo sauce, mozzarella cheese, grilled chicken, red onions, and ranch drizzle',
        sizeAndPrice: { '30': 14, '40': 17 }
      },
      { 
        name: 'Four Cheese',
        description: 'Tomato sauce, mozzarella cheese, cheddar cheese, provolone cheese, and parmesan cheese',
        sizeAndPrice: { '30': 13, '40': 16 }
      }
    ];

    await Pizza.insertMany(pizzas);

    console.log('Pizza records created successfully');
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