import mongoose from 'mongoose';
import Pizza from '../models/products/pizza.model';
import Drink from '../models/products/drink.model';
import Salad from '../models/products/salad.model';
import OtherItem from '../models/products/other.model';
import Order from '../models/order.model';

async function seedDatabase() {
  try {
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

    const drinks = [
      {
        name: 'Coca-Cola',
        description: 'Classic carbonated soft drink',
        popularity: 0,
        sizeAndPrice: { '30': 1.5, '40': 2.5 }
      },
      {
        name: 'Orange Juice',
        description: 'Freshly squeezed oranges',
        popularity: 0,
        sizeAndPrice: { '30': 2, '40': 3.5 }
      },
      {
        name: 'Lemonade',
        description: 'Refreshing lemon-flavored drink',
        popularity: 0,
        sizeAndPrice: { '30': 2, '40': 3.5 }
      },
      {
        name: 'Iced Tea',
        description: 'Chilled tea with a hint of lemon',
        popularity: 0,
        sizeAndPrice: { '30': 2, '40': 3.5 }
      },
      {
        name: 'Mango Smoothie',
        description: 'Blended mangoes with yogurt and honey',
        popularity: 0,
        sizeAndPrice: { '30': 3.5, '40': 5 }
      },
      {
        name: 'Strawberry Milkshake',
        description: 'Creamy milkshake with fresh strawberries',
        popularity: 0,
        sizeAndPrice: { '30': 4, '40': 6 }
      },
      {
        name: 'Espresso',
        description: 'Strong black coffee',
        popularity: 0,
        sizeAndPrice: { '30': 2, '40': 3.5 }
      },
      {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        popularity: 0,
        sizeAndPrice: { '30': 3, '40': 4.5 }
      },
      {
        name: 'Green Tea',
        description: 'Healthy and refreshing green tea',
        popularity: 0,
        sizeAndPrice: { '30': 2, '40': 3.5 }
      },
      {
        name: 'Hot Chocolate',
        description: 'Rich and creamy chocolate drink',
        popularity: 0,
        sizeAndPrice: { '30': 3, '40': 4.5 }
      }
    ];

    await Drink.insertMany(drinks);

    console.log('Drinks records created successfully');

    const salads = [
      {
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing',
        sizeAndPrice: { '30': 8, '40': 12 }
      },
      {
        name: 'Greek Salad',
        description: 'Fresh cucumbers, tomatoes, red onions, feta cheese, olives, and Greek dressing',
        sizeAndPrice: { '30': 9, '40': 13 }
      },
      {
        name: 'Caprese Salad',
        description: 'Sliced tomatoes, fresh mozzarella cheese, basil leaves, olive oil, and balsamic glaze',
        sizeAndPrice: { '30': 10, '40': 14 }
      },
      {
        name: 'Cobb Salad',
        description: 'Mixed greens, grilled chicken, avocado, bacon, hard-boiled eggs, tomatoes, and blue cheese dressing',
        sizeAndPrice: { '30': 11, '40': 15 }
      },
      {
        name: 'Nicoise Salad',
        description: 'Mixed greens, seared tuna, boiled potatoes, green beans, tomatoes, olives, and vinaigrette dressing',
        sizeAndPrice: { '30': 12, '40': 16 }
      },
      {
        name: 'Waldorf Salad',
        description: 'Mixed greens, apples, grapes, celery, walnuts, and mayonnaise dressing',
        sizeAndPrice: { '30': 10, '40': 14 }
      },
      {
        name: 'Spinach Salad',
        description: 'Fresh spinach leaves, mushrooms, bacon, hard-boiled eggs, red onions, and honey mustard dressing',
        sizeAndPrice: { '30': 9, '40': 13 }
      },
      {
        name: 'Thai Beef Salad',
        description: 'Sliced beef, mixed greens, cucumber, carrots, peanuts, and Thai dressing',
        sizeAndPrice: { '30': 12, '40': 16 }
      },
      {
        name: 'Mediterranean Salad',
        description: 'Mixed greens, roasted red peppers, artichoke hearts, kalamata olives, feta cheese, and balsamic vinaigrette',
        sizeAndPrice: { '30': 11, '40': 15 }
      },
      {
        name: 'Quinoa Salad',
        description: 'Quinoa, mixed greens, bell peppers, cherry tomatoes, cucumbers, and lemon vinaigrette',
        sizeAndPrice: { '30': 10, '40': 14 }
      }
    ];
    
    await Salad.insertMany(salads);

    console.log('Salads records created successfully');

    const others = [
      {
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter spread',
        popularity: 0,
        sizeAndPrice: { '30': 5, '40': 7 }
      },
      {
        name: 'Bruschetta',
        description: 'Toasted bread topped with diced tomatoes, garlic, basil, and olive oil',
        popularity: 0,
        sizeAndPrice: { '30': 6, '40': 8 }
      },
      {
        name: 'French Fries',
        description: 'Crispy fried potato sticks',
        popularity: 0,
        sizeAndPrice: { '30': 4, '40': 6 }
      },
      {
        name: 'Onion Rings',
        description: 'Breaded and deep-fried onion slices',
        popularity: 0,
        sizeAndPrice: { '30': 5, '40': 7 }
      },
      {
        name: 'Buffalo Wings',
        description: 'Fried chicken wings tossed in buffalo sauce',
        popularity: 0,
        sizeAndPrice: { '30': 8, '40': 10 }
      },
      {
        name: 'Cheese Sticks',
        description: 'Breaded and deep-fried cheese sticks',
        popularity: 0,
        sizeAndPrice: { '30': 7, '40': 9 }
      },
      {
        name: 'Mozzarella Bites',
        description: 'Breaded and deep-fried mozzarella cheese bites',
        popularity: 0,
        sizeAndPrice: { '30': 6, '40': 8 }
      },
      {
        name: 'Potato Skins',
        description: 'Potato shells filled with cheese, bacon, and green onions',
        popularity: 0,
        sizeAndPrice: { '30': 7, '40': 9 }
      },
      {
        name: 'Side Salad',
        description: 'Mixed greens, cherry tomatoes, cucumbers, and choice of dressing',
        popularity: 0,
        sizeAndPrice: { '30': 3, '40': 5 }
      },
      {
        name: 'Garlic Knots',
        description: 'Soft bread knots brushed with garlic butter and herbs',
        popularity: 0,
        sizeAndPrice: { '30': 4, '40': 6 }
      }
    ];

    await OtherItem.insertMany(others);

    console.log('Items of \"Other\" category records created successfully');

    const orderExample = [
      {
        order: {
          pizza: [
            { name: 'Margherita', size: 'Medium', quantity: 2 },
            { name: 'Pepperoni', size: 'Large', quantity: 1 }
          ],
          drink: [
            { name: 'Coke', size: 'Medium', quantity: 3 }
          ],
          salad: [],
          other: []
        },
        contacts: {
          name: 'John Doe',
          phoneNumber: 1234567890,
          email: 'john@example.com'
        },
        address: {
          street: '123 Main Street',
          building: 4,
          flat: 10
        },
        dateAndTime: {
          date: '2024-03-21',
          time: '18:00'
        },
        paymentMethod: 'Credit Card',
        status: 'Pending',
        totalPrice: 35.50
      }
    ];

    await Order.insertMany(orderExample);

    console.log('Order example created successfully');

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